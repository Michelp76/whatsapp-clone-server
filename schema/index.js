"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_import_1 = require("graphql-import");
const schema_1 = require("@graphql-tools/schema");
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs = (0, graphql_import_1.importSchema)('schema/typeDefs.graphql');
exports.default = (0, schema_1.makeExecutableSchema)({ resolvers: resolvers_1.default, typeDefs });
