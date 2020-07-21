# Fastify Eight Ball

This is a simple Api that returns one of the common Magic Eight Ball Responses.

There are a few issues with the repo that have been added to help get used to debugging.

## Getting Started

### Dependencies

* npm >= 6.14.6
* node >= v10.16.3

### Installing

* Install npm: https://www.npmjs.com/get-npm
* Install nodejs: https://nodejs.org/en/download/

### Executing program

* clone the repo
* install node_modules
* launch the service
```
npm install
npm run test
npm run dev
```

## Routes:
Once the service is running, the following routes can be used to generate a reponse

> /eightball/answers - returns all possible answers
#### Expected output:
```
[{"id":0,"name":"positive","answers":[{"id":1,"type":0,"resp":"As I see it, yes"},{"id":2,"type":0,"resp":"It is certain"},{"id":3,"type":0,"resp":"It is decidedly so"},{"id":4,"type":0,"resp":"Most likely"},{"id":5,"type":0,"resp":"Outlook good"},{"id":6,"type":0,"resp":"Signs point to yes"},{"id":7,"type":0,"resp":"Without a doubt"},{"id":8,"type":0,"resp":"Yes"},{"id":9,"type":0,"resp":"Yes – definitely"},{"id":10,"type":0,"resp":"You may rely on it"}]},{"id":1,"name":"vague","answers":[{"id":1,"type":1,"resp":"Reply hazy, try again"},{"id":2,"type":1,"resp":"Ask again later"},{"id":3,"type":1,"resp":"Better not tell you now"},{"id":4,"type":1,"resp":"Cannot predict now"},{"id":5,"type":1,"resp":"Concentrate and ask again"}]},{"id":2,"name":"negative","answers":[{"id":1,"type":2,"resp":"Don’t count on it"},{"id":2,"type":2,"resp":"My reply is no"},{"id":3,"type":2,"resp":"My sources say no"},{"id":4,"type":2,"resp":"Outlook not so good"},{"id":5,"type":2,"resp":"Very doubtful"}]}]
```

> /eightball/answer - returns a single randomly generated answer
======
#### Sample expected output (should be different every time):
```
{"id":6,"type":0,"resp":"Signs point to yes"}
```

## Acknowledgments

The structure for this service was built referencing: 
* [build a restify service with fastify](https://codesource.io/build-a-rest-service-with-fastify/)
* [https://github.com/Wisdom132/Fastify-Api](https://github.com/Wisdom132/Fastify-Api)
