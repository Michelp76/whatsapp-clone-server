"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("./schema"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/_ping', (req, res) => {
    res.send('pong');
});
const port = process.env.PORT || 4000;
const server = new apollo_server_express_1.ApolloServer({ schema: schema_1.default });
// https://stackoverflow.com/a/70165328
server.start().then(res => {
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen({ port }, () => console.log(`Gateway API running at port: ${port}`));
});
