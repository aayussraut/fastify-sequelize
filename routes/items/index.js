import {
  getItems,
  getItem,
  postItem,
  putItem,
  deleteItem,
} from "../../controllers/itemController.js";

export default function (fastify, opts, done) {
  const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              item_name: { type: "string" },
            },
          },
        },
      },
    },
    handler: getItems,
  };

  const getItemOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "number" },
            item_name: { type: "string" },
          },
        },
      },
    },
    handler: getItem,
  };

  const postItemOpts = {
    schema: {
      body: {
        type: "object",
        required: ["item_name"],
        properties: {
          item_name: { type: "string" },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            msg: { type: "string" },
          },
        },
      },
    },
    handler: postItem,
  };

  const putItemOpts = {
    schema: {
      body: {
        type: "object",
        required: ["item_name"],
        properties: {
          item_name: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            msg: { type: "string" },
          },
        },
      },
    },
    handler: putItem,
  };

  const deleteItemOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            msg: { type: "string" },
          },
        },
      },
    },
    handler: deleteItem,
  };

  fastify.get("/", getItemsOpts);
  fastify.get("/:id", getItemOpts);
  fastify.post("/", postItemOpts);
  fastify.put("/:id", putItemOpts);
  fastify.delete("/:id", deleteItemOpts);
  done();
}
