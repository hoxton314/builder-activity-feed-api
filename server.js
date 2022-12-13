const PORT = process.env.PORT || 1234;

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('mockData.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})