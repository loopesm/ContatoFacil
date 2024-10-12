const express = require("express");
const route = express.Router();

// CONTROLLERS
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");
const { erroServidor } = require("./src/middlewares/middleware");

// ROTAS LOGIN
route.get("/contato-facil", loginController.index);
// route.get("/login/index", loginController.login)
route.post("/contato-facil/login/register", loginController.register);
route.post("/contato-facil/login/login", loginController.login);
route.get("/contato-facil/login/logado", loginController.index);
route.get("/contato-facil/login/logout", loginController.logout);

// ROTAS CONTATO
route.get("/contato-facil/contato", contatoController.index);
route.post("/contato-facil/contato/register", contatoController.register);
route.get("/contato-facil/contato/index/:id", contatoController.editIndex);
route.post("/contato-facil/contato/edit/:id", contatoController.edit);
route.get("/contato-facil/contato/delete/:id", contatoController.delete)
// ROTA DE ERRO

route.use((req, res , next) => {
    res.status(404).render("404");
})

module.exports = route;
