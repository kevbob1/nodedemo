// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "person.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Greeter } from "./person";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PersonResponse } from "./person";
import type { Empty } from "./google/protobuf/empty";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service Greeter
 */
export interface IGreeterClient {
    /**
     * @generated from protobuf rpc: Hello(google.protobuf.Empty) returns (PersonResponse);
     */
    hello(input: Empty, options?: RpcOptions): UnaryCall<Empty, PersonResponse>;
}
/**
 * @generated from protobuf service Greeter
 */
export class GreeterClient implements IGreeterClient, ServiceInfo {
    typeName = Greeter.typeName;
    methods = Greeter.methods;
    options = Greeter.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Hello(google.protobuf.Empty) returns (PersonResponse);
     */
    hello(input: Empty, options?: RpcOptions): UnaryCall<Empty, PersonResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, PersonResponse>("unary", this._transport, method, opt, input);
    }
}
