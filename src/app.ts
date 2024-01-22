import config from "./config";
import Koa from "koa";
import cors from "koa-cors";
import parser  from "koa-bodyparser";

const App = new Koa();
const port = 3000;

App.use(parser())
  .use(cors())
  .listen(port, () => {
    console.log(`🚀 Server listening http://0.0.0.0:${port}/ 🚀`);
  });