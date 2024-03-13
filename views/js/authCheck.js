const authCheck = {
  isOwner: (req, res) => {
    if (req.session.is_logined) {
      return true
    } else {
      return false
    }
  }
}

module.exports = authCheck
