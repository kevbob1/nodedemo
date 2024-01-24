import { Context, DefaultState } from "koa";
import Router from 'koa-router';
import HttpStatus from "http-status";
import { driver } from "./db";

export const router = new Router<DefaultState, Context>();

router.get("/status",async (ctx,next)=>{
  const serverInfo = await driver.getServerInfo(); 
  ctx.status = HttpStatus.OK;
  ctx.body = serverInfo;
  await next();
});

router.get("/users",async (ctx,next)=>{
  const users = [{ name: 'Dead Horse' }, { name: 'Imed Jaberi' }, { name: 'Tom' }]
  ctx.status = HttpStatus.OK;
  await ctx.render('user', { users });
  await next();
});


