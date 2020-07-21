const eightballController = require('../controller/eightballController')
const routes = [{
  method: 'GET',
  url: '/eightball/answers',
  handler: eightballController.getAllAnswers
},
{
  method: 'GET',
  url: '/eightball/answer',
  handler: eightballController.getAnswer
}
]
module.exports = routes
