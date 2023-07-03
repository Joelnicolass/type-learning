"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const otroArchivo_1 = require("./otroArchivo");
// tipos basicos
let nombre = "Nico";
let edad = 35;
let objeto = { nombre: "Nico", edad: 35 };
let indefinido = undefined;
let nulo = null;
let vacio = void 0;
let arreglo = ["asd"];
let cualquierCosa = "";
const suma = (a, b) => {
    return a + b;
};
const nico = {
    id: "1",
    name: "nico",
    email: "nico@nico.com",
    avatar: "",
    createAt: new Date(),
};
const initialState = {
    users: [nico],
    isLoading: false,
    error: null,
};
const nameFirstUser = initialState.users[0].name;
(0, otroArchivo_1.saludo)("Hola Nico");
