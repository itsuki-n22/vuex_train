const bodyParser = require('body-parser')
module.exports = app => {
  app.use(bodyParser.json())

  const users = {
    'foo@domain.com': {
      password: 'password',
      userId: 1,
      token: '1234567890abcdef'
    }
  }

  app.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    const user = users[email]
    if (user) {
      if (user.password !== password) {
        res.status(401).json({ message: 'failed login !!!!'})
      } else {
        res.json({ userId: user.userId, token: user.token })
      }
    } else {
      res.status(404).json({ message: 'ユーザーが登録されていません.'})
    }
  })

}
