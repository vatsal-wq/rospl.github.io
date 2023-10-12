const bcrypt = require("bcryptjs");
const Users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "forge",
    email: "forge@xyz.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "person",
    email: "person@abc.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = Users;