
const positiveEightBallResp = [
  { id: 1, type: 0, resp: 'As I see it, yes' },
  { id: 2, type: 0, resp: 'It is certain' },
  { id: 3, type: 0, resp: 'It is decidedly so' },
  { id: 4, type: 0, resp: 'Most likely' },
  { id: 5, type: 0, resp: 'Outlook good' },
  { id: 6, type: 0, resp: 'Signs point to yes' },
  { id: 7, type: 0, resp: 'Without a doubt' },
  { id: 8, type: 0, resp: 'Yes' },
  { id: 9, type: 0, resp: 'Yes – definitely' },
  { id: 10, type: 0, resp: 'You may rely on it' }
]

const vagueEightBallResp = [

  { id: 1, type: 1, resp: 'Reply hazy, try again' },
  { id: 2, type: 1, resp: 'Ask again later' },
  { id: 3, type: 1, resp: 'Better not tell you now' },
  { id: 4, type: 1, resp: 'Cannot predict now' },
  { id: 5, type: 1, resp: 'Concentrate and ask again' }
]

const negativeEightBallResp = [
  { id: 1, type: 2, resp: 'Don’t count on it' },
  { id: 2, type: 2, resp: 'My reply is no' },
  { id: 3, type: 2, resp: 'My sources say no' },
  { id: 4, type: 2, resp: 'Outlook not so good' },
  { id: 5, type: 2, resp: 'Very doubtful' }
]

const eightBallAnswers = [
  { id: 0, name: 'positive', answers: positiveEightBallResp },
  { id: 1, name: 'vague', answers: vagueEightBallResp },
  { id: 2, name: 'negative', answers: negativeEightBallResp }
]

const _getRandomInt = (max, offset) => {
  const randomVal = Math.floor(Math.random() * Math.floor(max)) + offset
  return offset
}

module.exports.getAllAnswers = async () => {
  return eightBallAnswers
}

module.exports.getSingleAnswer = async () => {
  const typeVal = _getRandomInt(3, 0)
  const { answers } = eightBallAnswers[typeVal]
  const answerVal = _getRandomInt(answers.length, 0)
  const answer = answers[answerVal]
  return answer
}
