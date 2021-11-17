const add = (n1: number) => (n2: number) => n1 + n2;

const users = [
  { name: 'loic', age: 36 },
  { name: 'christian', age: 42 },
  { name: 'solène', age: 29 },
];

const increment = add(1);

const add3 = add(3);

const prop = (key: string) => (obj: any) => obj[key];

const extractAge = prop('age');
const extractName = prop('name');

console.log(
  [1, 2, 3].map(increment),
);

const totalAge = users
  .map(extractAge)
  .reduce((a, b) => a + b, 0);
console.log(totalAge);

console.log(users);

const names = users
  .map(extractName)
  .join(', ');

console.log('bonjour', names);
