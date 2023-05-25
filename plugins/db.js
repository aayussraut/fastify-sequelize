import fp from "fastify-plugin";
import { Sequelize } from "sequelize";

export default fp(async (fastify, opts, done) => {
  let sequelize = new Sequelize(
    "postgres://iush:8502@localhost:5432/item_database"
  );
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }

  fastify.decorate("sequelize", sequelize);
  done();
});
