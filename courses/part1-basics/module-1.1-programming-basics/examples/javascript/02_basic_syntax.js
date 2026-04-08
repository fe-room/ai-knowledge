/**
 * 02_basic_syntax.js
 * JavaScript基础语法示例（ES6+）
 */

// 1. 变量声明
console.log("=" .repeat(50));
console.log("1. 变量声明（let和const）");
console.log("=" .repeat(50));

// let - 可变变量
let count = 0;
count = 1;
console.log(`let变量: ${count}`);

// const - 常量（推荐）
const PI = 3.14159;
console.log(`const常量: ${PI}`);

// 注意：const数组/对象可以修改内容
const arr = [1, 2, 3];
arr.push(4);  // 可以修改
console.log(`const数组（可修改内容）: ${arr}`);

// 2. 箭头函数
console.log("\n" + "=" .repeat(50));
console.log("2. 箭头函数");
console.log("=" .repeat(50));

// 传统函数
function traditionalAdd(a, b) {
  return a + b;
}

// 箭头函数（推荐）
const arrowAdd = (a, b) => a + b;
const arrowGreet = (name) => `Hello, ${name}!`;

console.log(`传统函数: ${traditionalAdd(3, 5)}`);
console.log(`箭头函数: ${arrowAdd(3, 5)}`);
console.log(arrowGreet("Alice"));

// 3. 模板字符串
console.log("\n" + "=" .repeat(50));
console.log("3. 模板字符串");
console.log("=" .repeat(50));

const userName = "Bob";
const age = 30;

// 传统拼接
const traditional = "Name: " + userName + ", Age: " + age;

// 模板字符串（推荐）
const template = `Name: ${userName}, Age: ${age}`;

console.log(`传统拼接: ${traditional}`);
console.log(`模板字符串: ${template}`);

// 多行模板字符串
const multiLine = `
第一行
第二行
第三行
`;
console.log("多行字符串:");
console.log(multiLine);

// 4. 解构赋值
console.log("\n" + "=" .repeat(50));
console.log("4. 解构赋值");
console.log("=" .repeat(50));

// 数组解构
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(`数组解构: ${first}, ${second}, ${third}`);

// 对象解构
const person = { name: "Alice", age: 25, city: "Beijing" };
const { name, age, city } = person;
console.log(`对象解构: ${name}, ${age}, ${city}`);

// 重命名和默认值
const { name: userName2, job = "Developer" } = person;
console.log(`重命名: ${userName2}, 默认值: ${job}`);

// 5. 扩展运算符
console.log("\n" + "=" .repeat(50));
console.log("5. 扩展运算符");
console.log("=" .repeat(50));

// 数组扩展
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(`数组合并: ${combined}`);

// 对象扩展
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };
console.log("对象合并:", obj2);

// 函数参数
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(`可变参数求和: ${sum(1, 2, 3, 4, 5)}`);

// 6. 数组方法
console.log("\n" + "=" .repeat(50));
console.log("6. 数组方法");
console.log("=" .repeat(50));

const numbers = [1, 2, 3, 4, 5];

// map - 映射
const doubled = numbers.map(x => x * 2);
console.log(`map（乘2）: ${doubled}`);

// filter - 过滤
const evens = numbers.filter(x => x % 2 === 0);
console.log(`filter（偶数）: ${evens}`);

// reduce - 归约
const total = numbers.reduce((acc, x) => acc + x, 0);
console.log(`reduce（求和）: ${total}`);

// find - 查找
const found = numbers.find(x => x > 3);
console.log(`find（>3）: ${found}`);

// includes - 包含检查
console.log(`includes（包含3）: ${numbers.includes(3)}`);

// 链式调用
const chainResult = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 10);
console.log(`链式调用: ${chainResult}`);

// 7. 对象操作
console.log("\n" + "=" .repeat(50));
console.log("7. 对象操作");
console.log("=" .repeat(50));

const user = {
  name: "Alice",
  age: 25,
  skills: ["Python", "JavaScript"]
};

// Object.keys/values/entries
console.log("Object.keys:", Object.keys(user));
console.log("Object.values:", Object.values(user));
console.log("Object.entries:", Object.entries(user));

// 遍历对象
console.log("\n遍历对象:");
for (const [key, value] of Object.entries(user)) {
  console.log(`  ${key}: ${value}`);
}

// 8. 字符串方法
console.log("\n" + "=" .repeat(50));
console.log("8. 字符串方法");
console.log("=" .repeat(50));

const text = "Hello, JavaScript World";

console.log(`原文: ${text}`);
console.log(`includes('JavaScript'): ${text.includes('JavaScript')}`);
console.log(`startsWith('Hello'): ${text.startsWith('Hello')}`);
console.log(`endsWith('World'): ${text.endsWith('World')}`);
console.log(`slice(0, 5): ${text.slice(0, 5)}`);
console.log(`split(','): ${text.split(',')}`);
console.log(`replace('JavaScript', 'AI'): ${text.replace('JavaScript', 'AI')}`);

// 9. JSON操作
console.log("\n" + "=" .repeat(50));
console.log("9. JSON操作");
console.log("=" .repeat(50));

// 对象转JSON字符串
const jsonObj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(jsonObj);
console.log(`对象转JSON: ${jsonString}`);

// 格式化JSON
const formatted = JSON.stringify(jsonObj, null, 2);
console.log("格式化JSON:");
console.log(formatted);

// JSON字符串转对象
const parsed = JSON.parse(jsonString);
console.log("JSON转对象:", parsed);

console.log("\n示例完成!");