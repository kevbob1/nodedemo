import config from "./config";
import Koa from "koa";
import cors from "koa-cors";
import BodyParser  from "koa-bodyparser";
import Logger from "koa-logger";
import serve from "koa-static";
import mount from "koa-mount";
import render from "koa-ejs";
import path from "path";


import { router } from "./routes";

const app = new Koa();
const PORT = process.env.PORT || 3000;

render(app, {
  root: path.join(__dirname, '..', 'view'),
  layout: 'layout',
  viewExt: 'html',
  cache: config.viewCache,
  debug: true,
  async: true
});

app.use(BodyParser());
app.use(cors());
app.use(Logger());
app.use(mount('/static', serve('./public')));
app.use(mount('/js', serve(path.join(__dirname, '../node_modules/jquery/dist'))));
app.use(mount('/js', serve(path.join(__dirname, '../node_modules/bootstrap/dist/js'))));
app.use(mount('/css', serve(path.join(__dirname, '../node_modules/bootstrap/dist/css'))));
app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT, () => {
    console.log(`🚀 Server listening http://localhost:${PORT}/ 🚀`);
  });