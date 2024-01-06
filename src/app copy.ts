//import KoaGrpc from 'koa-grpc';
//import koaLogger from "koa-logger";
import * as grpc from "@grpc/grpc-js";

import { IGreeter, greeterDefinition } from "./generated/nodedemo/v1/helllo_world.grpc-server"
import { HelloRequest, HelloReply } from "./generated/nodedemo/v1/helllo_world";
//import router from "./router";


const greeterService: IGreeter = {
  sayHello: function (call: grpc.ServerUnaryCall<HelloRequest, HelloReply>, callback: grpc.sendUnaryData<HelloReply>): void {
    const responseHeaders = new grpc.Metadata();

    // by default, the server always writes some custom response headers
    responseHeaders.add('server-header', 'server header value');
    responseHeaders.add('server-header', 'server header value duplicate');
    responseHeaders.add('server-header-bin', Buffer.from('server header binary value'));
    call.sendMetadata(responseHeaders);

    const trailers = new grpc.Metadata();
    // always add some response trailers
    trailers.add("server-trailer", "server trailer value");
    trailers.add("server-trailer", "server trailer value duplicate");
    trailers.add("server-trailer-bin", Buffer.from('server trailer binary value'));

    
  }
};

const server = new grpc.Server();
server.addService(greeterDefinition, greeterService);
server.bindAsync(
  '0.0.0.0:3000',
  grpc.ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      server.start();
    }
  }
);