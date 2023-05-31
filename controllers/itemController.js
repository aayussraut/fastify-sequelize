export const getItems = async (req, reply) => {
  try {
    const items = await req.server.item.findAll();
    reply.send(items);
  } catch (err) {
    reply.send(err);
  }
};

export const postItem = async (req, reply) => {
  try {
    const item = await req.server.item.create(req.body);
    reply.code(201).send({ msg: "Item added" });
  } catch (err) {
    reply.send(err);
  }
};

export const getItem = async (req, reply) => {
  try {
    const item = await req.server.item.findByPk(req.params.id);
    return item;
  } catch (err) {
    reply.send(err);
  }
};

export const putItem = async (req, reply) => {
  try {
    const item = await req.server.item.findByPk(req.params.id);
    await item.update(req.body);
    reply.code(200).send({ msg: "Item updated" });
  } catch (err) {
    reply.send(err);
  }
};

export const deleteItem = async (req, reply) => {
  try {
    const item = await req.server.item.findByPk(req.params.id);
    await item.destroy();
    reply.code(200).send({ msg: "Item deleted" });
  } catch (err) {
    reply.send(err);
  }
};
