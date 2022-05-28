async function users(fastify, options) {
  const userCollection = fastify.mongo.db.collection("users");
  const ObjectId = fastify.mongo.ObjectId;

  fastify.get("/users", async (request, reply) => {
    const users = await userCollection.find().toArray();
    return users;
  });

  fastify.post("/users", async (req, res) => {
    const result = await userCollection.insertOne(req.body);
    return result;
  });

  fastify.get("/users/:id", async (req, res) => {
    const result = await userCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!result) {
      throw new Error("Invalid value");
    }
    return result;
  });

  fastify.delete("/users/:id", async (req, res) => {
    const result = await userCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    return result;
  });
}

module.exports = users;
