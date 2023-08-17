const express = require("express");
const bodyParser = require("body-parser");
const {verifyAToken} = require("../middelware/Authentication")
const routes = express.Router();

//import all models objects
const { users } = require("../model");

// routes.get('^/$|/challenger',(req,res)=>{
//     res.sendFile(patn.resolve(__dirname,'../static'))
// })

//=====user's router======
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
module.exports = {
  express,
  routes,
};

// =====Books router=====
routes.get('/books',verifyAToken, (req, res) => {
  books.fetchBooks(req, res);
})






