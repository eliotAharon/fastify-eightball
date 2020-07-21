const fastify = require('fastify')
const PORT = process.env.PORT || 3333
const routes = require('./routes/eightBallRoutes')
const app = fastify({
  logger: true
})
// add all availbale routes
routes.forEach((route, index) => {
  app.route(route)
})
// Declare a route
app.get('/', async () => {
  return {
    Message: 'Fastify is On Fire'
  }
})

// Funtion To run the server
const start = async () => {
  try {
    await app.listen(PORT)
    app.log.info(`server listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
