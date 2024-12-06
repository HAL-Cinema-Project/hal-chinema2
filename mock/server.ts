import * as jsonServer from "json-server";
const app = jsonServer.create();
const middlewares = jsonServer.defaults({ static: "your-path" });

app.use(middlewares);
