/**
 * 03_typescript_basics.ts
 * TypeScript基础语法示例
 *
 * 编译命令: tsc 03_typescript_basics.ts
 * 运行命令: node 03_typescript_basics.js
 */

// 1. 基本类型
console.log("=" .repeat(50));
console.log("1. 基本类型");
console.log("=" .repeat(50));

let str: string = "Hello TypeScript";
let num: number = 42;
let bool: boolean = true;

console.log(`字符串: ${str}`);
console.log(`数字: ${num}`);
console.log(`布尔: ${bool}`);

// 2. 数组类型
console.log("\n" + "=" .repeat(50));
console.log("2. 数组类型");
console.log("=" .repeat(50));

// 两种数组类型定义方式
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: Array<string> = ["a", "b", "c"];

console.log(`数字数组: ${arr1}`);
console.log(`字符串数组: ${arr2}`);

// 3. 对象类型和接口
console.log("\n" + "=" .repeat(50));
console.log("3. 对象类型和接口");
console.log("=" .repeat(50));

// 对象类型定义
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25
};

console.log("对象:", person);

// 接口定义（推荐）
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// 实现接口
class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return `Hello, I'm ${this.name}, ${this.age} years old`;
  }
}

const student = new Student("Bob", 20);
console.log(student.greet());

// 4. 函数类型
console.log("\n" + "=" .repeat(50));
console.log("4. 函数类型");
console.log("=" .repeat(50));

// 函数类型定义
function add(a: number, b: number): number {
  return a + b;
}

// 箭头函数类型定义
const multiply = (a: number, b: number): number => a * b;

console.log(`add(3, 5): ${add(3, 5)}`);
console.log(`multiply(3, 5): ${multiply(3, 5)}`);

// 可选参数和默认参数
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}

function greetWithDefault(name: string, greeting: string = "Hi"): string {
  return `${greeting}, ${name}`;
}

console.log(greet("Alice"));
console.log(greet("Alice", "Good morning"));
console.log(greetWithDefault("Bob"));

// 5. 泛型
console.log("\n" + "=" .repeat(50));
console.log("5. 泛型");
console.log("=" .repeat(50));

// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

console.log(`identity<string>("hello"): ${identity<string>("hello")}`);
console.log(`identity<number>(42): ${identity<number>(42)}`);

// 泛型数组
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(`firstElement([1, 2, 3]): ${firstElement([1, 2, 3])}`);
console.log(`firstElement(["a", "b", "c"]): ${firstElement(["a", "b", "c"])}`);

// 6. 联合类型和类型别名
console.log("\n" + "=" .repeat(50));
console.log("6. 联合类型和类型别名");
console.log("=" .repeat(50));

// 联合类型
let mixed: string | number;
mixed = "hello";
console.log(`联合类型（字符串）: ${mixed}`);
mixed = 42;
console.log(`联合类型（数字）: ${mixed}`);

// 类型别名
type ID = string | number;
type User = {
  id: ID;
  name: string;
  age: number;
};

const user: User = {
  id: 123,
  name: "Alice",
  age: 25
};

console.log("User类型:", user);

// 7. 类型断言
console.log("\n" + "=" .repeat(50));
console.log("7. 类型断言");
console.log("=" .repeat(50));

let someValue: any = "this is a string";

// 类型断言（两种方式）
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

console.log(`字符串长度（类型断言）: ${strLength1}, ${strLength2}`);

// 8. 枚举
console.log("\n" + "=" .repeat(50));
console.log("8. 枚举");
console.log("=" .repeat(50));

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let color: Color = Color.Red;
let direction: Direction = Direction.Up;

console.log(`数字枚举: ${color} (Color.Red)`);
console.log(`字符串枚举: ${direction} (Direction.Up)`);

// 9. 类和继承
console.log("\n" + "=" .repeat(50));
console.log("9. 类和继承");
console.log("=" .repeat(50));

class Animal {
  constructor(public name: string) {}

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} barks!`);
  }

  breed: string;
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.move(10);
dog.bark();

// 10. 实用类型
console.log("\n" + "=" .repeat(50));
console.log("10. 实用类型");
console.log("=" .repeat(50));

interface FullUser {
  name: string;
  age: number;
  email: string;
  phone: string;
}

// Partial - 所有属性可选
type PartialUser = Partial<FullUser>;
const partialUser: PartialUser = {
  name: "Alice"
};
console.log("Partial类型:", partialUser);

// Required - 所有属性必需
type RequiredUser = Required<PartialUser>;

// Readonly - 所有属性只读
type ReadonlyUser = Readonly<FullUser>;

// Pick - 选择部分属性
type UserNameAndAge = Pick<FullUser, "name" | "age">;
const miniUser: UserNameAndAge = {
  name: "Bob",
  age: 30
};
console.log("Pick类型:", miniUser);

// Omit - 排除部分属性
type UserWithoutEmail = Omit<FullUser, "email">;

console.log("\nTypeScript示例完成!");