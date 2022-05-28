const fastify = require("fastify")({ logger: true });

const userRoutes = require("./users");
const mongoConnector = require("./mongo-connector");

fastify.register(mongoConnector);
fastify.register(userRoutes);

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
