const express = require('express')
const app = express()
const template = require('./views/js/template.js')
const session = require('./views/js/session.js')
const db = require('./views/js/db.js')
const authRouter = require('./views/js/auth.js')
const authCheck = require('./views/js/authCheck.js')
const url = require('url')
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) 
const port = 8001

// Use 'views' Directory
app.use(express.static(__dirname + '/views'))

// Session
app.use(session)

// Main Page
app.get('/', (req, res) => {
  db.query(`SELECT id, title, subheading, DATE_FORMAT(created, '%y-%m-%d') AS datetime FROM blog`, (err, topics) => {
    // Declare a Variable for Blog Contentss
    var list = ''
    // Throw Error When Error Occurs
    if (err) throw err
    // Append Blog Contents to the Variable
    topics.forEach((elem) => {
      list = template.posting(elem.id, elem.title, elem.subheading, elem.datetime) + `<hr class="m-0" />` + list
    })
    // Construct a Full HTML Source
    var html = template.head() + template.body(list)
    // Render
    res.send(html)
  })
})

// Auth(Sign In)
app.use('/auth', authRouter)

// Page for Post Writing
app.get('/write', (req, res) => {
  // Not Signed In
  if (!authCheck.isOwner(req, res)) {
    res.redirect('/auth/login')
    return false
  }
  // Signed In
  else {
    var render = template.write()
    res.send(render)
  }
})

// Page for Each Post
app.get('/post', (req, res) => {
  var queryData = url.parse(req.url, true).query
  db.query(`SELECT id, title, content FROM blog WHERE id=${queryData.id}`, (err, topics) => {
    if (err) throw err
    var render = template.post(topics[0].title, topics[0].content)
    res.send(render)
  })
})

// Post Uploading Process
app.post('/upload', (req, res) => {
  // Not Signed In
  if (!authCheck.isOwner(req, res)) {
    res.redirect('/auth/login')
    return false
  }
  // Signed In
  else {
    var title = req.body.title
    var subheading = req.body.subheading
    var content = req.body.editordata
    db.query(`INSERT INTO blog(title, subheading, content, created) VALUES (?, ?, ?, DATE_FORMAT(now(), '%Y-%m-%d'))`, [title, subheading, content], (err, topics) => {
      if (err) throw err
      res.redirect('/')
    })
  }
})

// Post Delete Process
app.get('/delete', (req, res) => {
  if (authCheck.isOwner(req, res)) {
    var queryData = url.parse(req.url, true).query
    db.query(`DELETE FROM blog WHERE id='${queryData.id}'`, (err) => {
      res.redirect('/')
    })
  } else {
    res.redirect('/')
  }
})

// Post Update Process
app.get('/edit', (req, res) => {
  if (authCheck.isOwner(req, res)) {
    var queryData = url.parse(req.url, true).query
    db.query(`SELECT * FROM blog WHERE id='${queryData.id}'`, (err, topics) => {
      if (err) throw err
      // var title = topics[0].title
      // var subheading = topics[0].subheading
      var write = template.write()
      db.query(`DELETE FROM blog WHERE id='${queryData.id}'`, (err) => {
        res.send(write)
      })
    })
  } else {
    res.redirect('/')
  }
})

// Listen
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
