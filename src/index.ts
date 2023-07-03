import { saludo } from "./otroArchivo";

// tipos basicos
let nombre: string = "Nico";
let edad: number = 35;
let objeto: Object = { nombre: "Nico", edad: 35 };
let indefinido: undefined = undefined;
let nulo: null = null;
let vacio: void = void 0;
let arreglo: string[] = ["asd"];
let cualquierCosa: any = "";

const suma = (a: number, b: number): number => {
  return a + b;
};

interface User {
  id: string | number;
  name: string;
  email: string;
  avatar?: string;
  createAt?: Date;
}

interface State {
  users: User[];
  isLoading: boolean;
  error: null | string | Error;
}

const nico: User = {
  id: "1",
  name: "nico",
  email: "nico@nico.com",
  avatar: "",
  createAt: new Date(),
};

const initialState: State = {
  users: [nico],
  isLoading: false,
  error: null,
};

const nameFirstUser = initialState.users[0].name;

saludo("Hola Nico");
