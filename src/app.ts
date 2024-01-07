import * as grpc from "@grpc/grpc-js";
import { adaptService } from "@protobuf-ts/grpc-backend";
import { IGreeter } from "./generated/nodedemo/v1/helllo_world.grpc-server";
import { Greeter, HelloReply, HelloRequest } from "./generated/nodedemo/v1/helllo_world";

class GreeterImpl implements IGreeter {
	[name: string]: grpc.UntypedHandleCall;
	async sayHello(call: grpc.ServerUnaryCall<HelloRequest, HelloReply>, callback: grpc.sendUnaryData<HelloReply>) {
		const reply = HelloReply.create(
			{ message: "Hello " }
		);
		callback(null, reply);
	}
}

const server = new grpc.Server();
server.addService(...adaptService(Greeter, new GreeterImpl()));

server.bindAsync(
	"0.0.0.0:3000",
	grpc.ServerCredentials.createInsecure(),
	(err, port) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`gRPC listening on ${port}`);
		server.start();
	}
);
