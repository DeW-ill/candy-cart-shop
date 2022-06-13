// Responsible for connecting to db.Jason

const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("./db.json");

const middlewares = jsonServer.defaults({
  static: "./build",
});

const PORT = process.env.PORT || 5050;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "items",
  })
);

server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} \n ================  \n  `);
});
