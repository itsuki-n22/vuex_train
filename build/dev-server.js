const bodyParser = require('body-parser')
module.export = app => {
  app.user(bodyParser.json())
}