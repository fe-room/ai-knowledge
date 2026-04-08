/**
 * 01_hello_world.js
 * JavaScript基础示例：Hello World
 */

// 基本的Hello World
console.log("Hello, World!");

// 使用模板字符串
const name = "JavaScript Learner";
console.log(`Hello, ${name}!`);

// 多行输出
console.log(`
欢迎学习JavaScript！
这是一个灵活且强大的编程语言。
`);

// 输出到文件（Node.js环境）
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello, World!\n');

console.log("内容已写入hello.txt文件");

// ES6模块语法（需要在package.json中设置"type": "module"）
// import fs from 'fs';
// fs.writeFileSync('hello.txt', 'Hello from ES Module!\n');