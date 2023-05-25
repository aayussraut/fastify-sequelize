import { DataTypes } from "sequelize";
import fp from "fastify-plugin";

export default fp(async (fastify, opts, done) => {
  const item = fastify.sequelize.define("item", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  try {
    await item.sync();
    console.log("Item table created");
  } catch (err) {
    console.log(err);
  }

  fastify.decorate("item", item);
  done();
});
