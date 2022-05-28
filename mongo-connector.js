const fastifyPlugin = require("fastify-plugin");
// const fastifyMongo = require('fastify-mongodb')
const fastifyMongo = require("@fastify/mongodb");

async function mongoConnector(fastify, options) {
  fastify.register(fastifyMongo, {
    url: "mongodb://localhost:27017/fastify",
  });
}

module.exports = fastifyPlugin(mongoConnector);
