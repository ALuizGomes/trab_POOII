"use strict";



Object.defineProperty(exports, "__esModule", { value: true });

exports.helloWorld = void 0;

var CreateUser_1 = require("./services/CreateUser");

function helloWorld(req, res) {
    var user = (0, CreateUser_1.createUser)({
        name: 'André Gomes',
        email: 'aluizgomes@terra.com.br',
        password: '3004'
    });

    return res.json({ message: "Hello World" });
    
}

exports.helloWorld = helloWorld;
