import KoaRouter from "koa-router";
import { Person } from "./generated/nodedemo/v1/persons"

const router = new KoaRouter();

router.get('/test', (ctx) => {
    ctx.body = "Hello World!";
});


router.get('/api/example', (ctx) => {
  const p = Person.create({
    name: 'test'
  });
  const pBuffer = Person.toBinary(p).buffer;
  const pBuffer2 = Buffer.from(pBuffer);
  ctx.response.body = pBuffer2; 
  ctx.response.type = "application/x-protobuf";
});

export default router;