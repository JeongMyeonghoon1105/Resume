const express = require('express')
const template = require('./template.js')
const authCheck = require('./authCheck.js')
const db = require('./db.js')
const router = express.Router()

// Sign In
router.get('/login', (req, res) => {
  if (authCheck.isOwner(req, res)) {
    res.redirect('/')
  } else {
    var html = template.signin()
    res.send(html)
  }
})

// Sign In Process
router.post('/login_process', (req, res) => {
  var username = req.body.username
  var password = req.body.pwd
  // Check if id and pw are entered
  if (username && password) {
    db.query('SELECT * FROM userTable WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
      if (error) throw error
      // If DB returned id and pw then sign the user in
      if (results.length > 0) {
        req.session.is_logined = true
        req.session.nickname = username
        req.session.save(() => {
          res.redirect(`/`)
        })
      } else {              
        res.send(
          `<script type="text/javascript">
            alert("Wrong ID or PW")
            document.location.href="/auth/login"
          </script>`
        )
      }            
    })
  } else {
    res.send(
      `<script type="text/javascript">
        alert("Enter Id & PW")
        document.location.href="/auth/login"
      </script>`
    )    
  }
})

// Sign Out
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/')
  })
})

module.exports = router
