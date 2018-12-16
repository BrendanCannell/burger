let orm = require("../config/orm");

module.exports = async () => {
  let db = await orm('burger');

  return {
    all: () => db.select(),
    create: ({ name }) => db.insert({ name, devoured: false }),
    devour: ({ id, devoured }) => db.update({ devoured }, { id }),
    clear: () => db.delete()
  }
}