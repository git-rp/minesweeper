let a: number;
let b: boolean;
let c: string;

type User = {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
};

let user: User = {
  name: 'Bhuvi',
  surname: 'Patil',
  age: 13,
  isAdmin: true,
};

type MathFunc = (a: number, b: number) => number;
const mulF: MathFunc = (a, b) => a * b;
const addF: MathFunc = (a, b) => a + b;

const mul = (a: number, b: number): number => {
  return a * b;
};
const add = (a: number, b: number): number => {
  return a + b;
};

//---- Interface

interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
}
interface UserWithPermissions extends BasicUser {
  permissions: string[];
}
const user1: UserWithPermissions = {
  name: 'Bhuvi',
  surname: 'Patil',
  age: 13,
  isAdmin: true,
  permissions: ['admin', 'operator', 'instructor'],
};
