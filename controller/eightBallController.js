const boom = require('boom')
const eightBallBrain = require('../lib/eightBallBrain')

// get all post
exports.getAllAnswers = async (req, reply) => {
  try {
    return await eightBallBrain.getAllAnswers()
  } catch (err) {
    throw boom.boomify(err)
  }
}
// get single post by id
exports.getSingleAnswer = async (req, reply) => {
  try {
    const answer = await eightBallBrain.getSingleAnswer()
    return answer
  } catch (err) {
    throw boom.boomify(err)
  }
}

// error remove await from get all answers
