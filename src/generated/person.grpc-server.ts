// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "person.proto" (syntax proto3)
// tslint:disable
import { PersonResponse } from "./person";
import { Empty } from "./google/protobuf/empty";
import type * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service Greeter
 */
export interface IGreeter extends grpc.UntypedServiceImplementation {
    /**
     * @generated from protobuf rpc: Hello(google.protobuf.Empty) returns (PersonResponse);
     */
    hello: grpc.handleUnaryCall<Empty, PersonResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service Greeter.
 *
 * Usage: Implement the interface IGreeter and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IGreeter = ...
 * server.addService(greeterDefinition, service);
 * ```
 */
export const greeterDefinition: grpc.ServiceDefinition<IGreeter> = {
    hello: {
        path: "/Greeter/Hello",
        originalName: "Hello",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => PersonResponse.fromBinary(bytes),
        requestDeserialize: bytes => Empty.fromBinary(bytes),
        responseSerialize: value => Buffer.from(PersonResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(Empty.toBinary(value))
    }
};
