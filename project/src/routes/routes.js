const { Router } = require("express");
const routes = new Router();

const auth = require("../app/middlewares/auth");

const sessions = require("../app/controllers/SessionsController");
const produtos = require("../app/controllers/ProdutosController");
const funcionarios = require("../app/controllers/FuncionariosController");
const pedidos = require("../app/controllers/PedidosController");
const finalizados = require("../app/controllers/FinalizadosController");
const pagamentos = require("../app/controllers/PagamentosController");

routes.post("/session", sessions.create);
routes.post("/funcionarios/create", funcionarios.create);

routes.use(auth);

routes.get("/produtos", produtos.index);
routes.get("/produtos/show/:id", produtos.show);
routes.post("/produtos/create", produtos.create);
routes.put("/produtos/update/:id", produtos.update);
routes.delete("/produtos/destroy/:id", produtos.destroy);

routes.get("/funcionarios", funcionarios.index);
routes.get("/funcionarios/show/:id", funcionarios.show);
routes.patch("/funcionarios/update/:id", funcionarios.update);
routes.delete("/funcionarios/destroy/:id", funcionarios.destroy);

routes.get("/pedidos", pedidos.index);
routes.get("/pedidos/show/:id", pedidos.show);
routes.post("/pedidos/create", pedidos.create);
routes.patch("/pedidos/update/:id", pedidos.update);
routes.delete("/pedidos/destroy/:id", pedidos.destroy);

routes.get("/finalizados", finalizados.index);
routes.get("/finalizados/show/:id", finalizados.show);
routes.post("/finalizados/create/:id", finalizados.create);
routes.patch("/finalizados/update/:id", finalizados.update);
routes.delete("/finalizados/destroy/:id", finalizados.destroy);

routes.get("/pagamentos", pagamentos.index);
routes.get("/pagamentos/show/:id", pagamentos.show);
routes.post("/pagamentos/create", pagamentos.create);
routes.patch("/pagamentos/update/:id", pagamentos.update);
routes.delete("/pagamentos/destroy/:id", pagamentos.destroy);

module.exports = routes;
