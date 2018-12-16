let connection = require("./connection.js");

module.exports = async (table) => {
  let conn = await connection();

  return {
    select: (columns = '*', where) => conn.query("select ?? from ??" + (where ? " where ?" : ""), [columns, table, where]),
    insert: (vals) => conn.query("insert into ?? set ?", [table, vals]),
    update: (vals, where) => conn.query("update ?? set ? where ?", [table, vals, where]),
    delete: (where) => conn.query("delete from ??" + (where ? " where ?" : ""), [table, where])
  }
}