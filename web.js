const express = require('express')
const template = require('./views/js/template.js')
const session = require('./views/js/session.js')
const db = require('./views/js/db.js')
const authRouter = require('./views/js/auth.js')
const authCheck = require('./views/js/authCheck.js')
const url = require('url')
const bodyParser= require('body-parser')

const app = express()
const port = 8001

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true})) 

// Use 'views' Directory
app.use(express.static(__dirname + '/views'))

// Use Session
app.use(session)

// Main Page
app.get('/', (req, res) => {
  db.query(`SELECT id, title, subheading, DATE_FORMAT(created, '%y-%m-%d') AS datetime FROM blog;`, (err, topics) => {
    // Declare a Variable for Blog Contentss
    var list = ''
    var ids = []
    // Throw Error When Error Occurs
    if (err) throw err
    // Save ids in an Array
    topics.forEach((elem) => {
      ids.push(elem.id)
    })
    // Sort
    ids.sort(function (a, b) {
      return b - a;
    })
    // Append Blog Contents to the Variable
    ids.forEach((elem) => {
      topics.forEach((e) => {
        if (e.id == elem) {
          list = template.posting(e.id, e.title, e.subheading, e.datetime) + `<hr class="m-0" />` + list
        }
      })
    })
    // Construct a Full HTML Source
    var html = template.head() + template.body(list)
    // Render
    res.send(html)
  })
})

// Use Auth(Sign In)
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
    var render = template.write('/upload', '', '', '')
    res.send(render)
  }
})

// Page for Each Post
app.get('/post', (req, res) => {
  var queryData = url.parse(req.url, true).query
  db.query(`SELECT id, title, content FROM blog WHERE id=${queryData.id};`, (err, topics) => {
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
    db.query(`INSERT INTO blog(title, subheading, content, created) VALUES (?, ?, ?, DATE_FORMAT(now(), '%Y-%m-%d'));`, [title, subheading, content], (err, topics) => {
      if (err) throw err
      res.redirect('/')
    })
  }
})

// Post Delete Process
app.get('/delete', (req, res) => {
  // Not Signed In
  if (!authCheck.isOwner(req, res)) {
    res.redirect('/auth/login')
    return false
  }
  // Signed In
  else {
    var queryData = url.parse(req.url, true).query
    db.query(`DELETE FROM blog WHERE id=${queryData.id};`, (err) => {
      if (err) throw err
      res.redirect('/')
    })
  }
})

// Post Update Process
app.get('/edit', (req, res) => {
  // Not Signed In
  if (!authCheck.isOwner(req, res)) {
    res.redirect('/auth/login')
    return false
  }
  // Signed In
  else {
    var queryData = url.parse(req.url, true).query
    db.query(`SET SQL_SAFE_UPDATES = 0;`, (error) =>  {
      if (error) throw error
      db.query(`SELECT title, subheading, content FROM blog WHERE id=${queryData.id};`, (err, topics) => {
        if (err) throw err
        var render = template.write(`/update?id=${queryData.id}`, `${topics[0].title}`, `${topics[0].subheading}`, `${topics[0].content}`)
        res.send(render)
      })
    })
  }
})

// Post Editing Process
app.post('/update', (req, res) => {
  // Not Signed In
  if (!authCheck.isOwner(req, res)) {
    res.redirect('/auth/login')
    return false
  }
  // Signed In
  else {
    var queryData = url.parse(req.url, true).query
    var title = req.body.title
    var subheading = req.body.subheading
    var content = req.body.editordata
    db.query(`UPDATE blog SET title=?, subheading=?, content=? WHERE id=?;`, [title, subheading, content, queryData.id], (err, topics) => {
      if (err) throw err
      res.redirect(`/post?id=${queryData.id}`)
    })
  }
})

// Listen
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
