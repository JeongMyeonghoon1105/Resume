const express = require('express')
const app = express()
const template = require('./views/js/template.js')
const mysql = require('mysql')
const url = require('url')
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const port = 8001

// DB
var db = mysql.createConnection({
  host: 'Domain',
  user: 'Cafe24 ID',
  password: 'DB PW',
  database: 'Cafe24 ID',
  port: '3306',
})

app.use(express.static(__dirname + '/views'))

// Main Page
app.get('/', (req, res) => {
  db.query(`SELECT id, title, subheading, DATE_FORMAT(created, '%y-%m-%d') AS datetime FROM blog`, (err, topics) => {
    // Declare a Variable for Blog Contentss
    var list = ''
    // Throw Error When Error Occurs
    if (err) throw err
    // Append Blog Contents to the Variable
    topics.forEach((elem, index) => {
      if (index != 0) {
        list = template.posting(elem.id, elem.title, elem.subheading, elem.datetime) +
          template.hr() + list
      } else {
        list = template.posting(elem.id, elem.title, elem.subheading, elem.datetime) + list
      }
    })
    // Construct a Full HTML Source
    var html = template.head() + template.body(list)
    // Render
    res.send(html)
  })
})

// Page for Post Writing
app.get('/write', (req, res) => {
  var render = template.write()
  res.send(render)
})

// Page for Each Post
app.get('/post', (req, res) => {
  var queryData = url.parse(req.url, true).query
  db.query(`SELECT id, title, content FROM blog WHERE id=${queryData.id}`, (err, topics) => {
    if (err) throw err;
    var render = template.post(topics[0].title, topics[0].content)
    res.send(render)
  })
})

// Post Uploading Process
app.post('/upload', (req, res) => {
  // console.log(req.body)
  var title = req.body.title
  var subheading = req.body.subheading
  var content = req.body.editordata
  db.query(`INSERT INTO blog(title, subheading, content, created) VALUES (?, ?, ?, DATE_FORMAT(now(), '%Y-%m-%d'))`, [title, subheading, content], (err, topics) => {
    if (err) throw err;
    res.redirect('/')
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
