import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// Agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista completa de superheroes ordenada
const superheroesCompleto = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados');
console.log(superheroesCompleto);