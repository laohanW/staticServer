const fastify = require('fastify')({
  logger:true
})
const path = require('path')

fastify.register(require('fastify-static'), {
  root: "C:/Users/zhouhan/Desktop/GotPatch/",
  prefix: '/public/', // optional: default '/'
})

fastify.listen(4000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})