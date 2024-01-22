import { Context, DefaultState } from "koa";
import Router from 'koa-router';
import HttpStatus from "http-status";


export const router = new Router<DefaultState, Context>();

router.get("/book",async (ctx,next)=>{
  const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});

router.get("/users",async (ctx,next)=>{
  const users = [{ name: 'Dead Horse' }, { name: 'Imed Jaberi' }, { name: 'Tom' }]
  ctx.status = HttpStatus.OK;
  await ctx.render('user', { users });
  await next();
});


