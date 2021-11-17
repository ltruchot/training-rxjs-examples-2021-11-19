const ingredients = [
  { name: "tomate", price: 1, veg: true},
  { name: "champi", price: 2, veg: true},
  { name: "steak", price: 10, veg: false}
];

const users = [
  { name: "loic", },
  { name: "angelo", },
  { name: "line", },
];
/*
const prop = key => obj => obj[key];
const propVeg = prop("veg");
const propPrice = prop("price"); 
const add = (a, b) => a + b;


const sumOfVeg = ingredients
  .filter(propVeg)
  .map(propPrice)
  .reduce(add, 0);

const sum = arr => arr.reduce(add, 0);
const keepVeggie = arr => arr.filter(propVeg);
const vegs = sum(keepVeggie(arr));
*/
import { filter } from "./array_methods";

const keepVeggie = filter(val => val.veg === true);
const keepNameIncludingI = filter(val => val.name.includes("i"));

console.log(keepNameIncludingI(users));

/*
const veggies = keepNameIncludingI(
  keepVeggie(ingredients)
);
*/

/// const getVeggies = compose(keepVeggie, keepNameIncludingI);
// console.log(getVeggies(ingredients));

const compose = (f1, f2) => a => f1(f2(a));


const pipe2 = (f1, f2) => a => f2(f1(a));

const inc = n => n + 1;
const double = n => n * 2;
const identity = a => a;
/*
const incThenDouble = compose(double, inc);
const incThenDouble2 = pipe(inc, double);
const incThinDoubleThenIncThenDouble = pipe(incThenDouble2, incThenDouble2)
console.log(incThinDoubleThenIncThenDouble(5));
*/

const pipe = (...fns) => a => fns.reduce((acc, f) => f(acc), a);
const toto = pipe(inc, double, inc, double, identity, double);
console.log(toto(5));





/*
sum([1, 2, 4]);

console.log(final);
/*
// -- EXO 0 - faire un pipeline de méthode d'Array
// ne garder que les ingredients vegetariens (utiliser "[].filter()")
// faire le total du prix des ingredient veggie
// l'afficher dans la console
// bonus: appliquer un discount de 30%
// bonus: afficher le total + discount appliqué dans une <div> doc HTML

// --> pas d'usage du mot clé "function"
// --> pas de callback écrite en entier dans les filter, reduce, map...
// utiliser des fonctions prédéfinies, type:
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const not = (a) => !a;

// exemple avec pipe
/*
ingredients$.pipe(
  filter(),
  map(),
  reduce(),
).subscribe(val => console.log(val))
*/

