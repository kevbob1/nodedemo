import * as grpc from "@grpc/grpc-js";
import { adaptService } from "@protobuf-ts/grpc-backend";
import { IGreeter } from "./generated/person.grpc-server";
import { Greeter, PersonResponse } from "./generated/person";
import { Empty } from "./generated/google/protobuf/empty";

class GreeterImpl implements IGreeter {
	[name: string]: grpc.UntypedHandleCall;
	async hello(call: grpc.ServerUnaryCall<Empty, PersonResponse>, callback: grpc.sendUnaryData<PersonResponse>) {
		const reply = PersonResponse.create(
			{ name: "Hello " }
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
