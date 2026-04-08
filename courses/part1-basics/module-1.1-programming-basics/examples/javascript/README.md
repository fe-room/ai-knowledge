# JavaScript/TypeScript代码示例包

本目录包含JavaScript和TypeScript基础语法及异步编程的示例代码，帮助学员掌握AI应用开发所需的JavaScript技能。

## 示例文件列表

| 文件 | 内容 | 重点 |
|------|------|------|
| [01_hello_world.js](./01_hello_world.js) | Hello World基础 | JavaScript入门 |
| [02_basic_syntax.js](./02_basic_syntax.js) | ES6+语法、解构、箭头函数 | JavaScript基础 |
| [03_typescript_basics.ts](./03_typescript_basics.ts) | TypeScript类型、接口、泛型 | TypeScript基础 |
| [04_async_programming.js](./04_async_programming.js) | Promise、async/await详解 | ⭐ **重点** |
| [05_api_basics.js](./05_api_basics.js) | Fetch API、HTTP请求基础 | API基础 |

## 运行环境要求

- Node.js 18 LTS或更高版本
- npm包管理器

## 安装依赖

```bash
# 初始化项目
npm init -y

# 安装依赖（如果需要）
npm install openai @anthropic-ai/sdk dotenv
```

## 运行示例

```bash
# 运行JavaScript示例
node 01_hello_world.js
node 02_basic_syntax.js
node 04_async_programming.js
node 05_api_basics.js

# 编译并运行TypeScript示例
# 需要先安装TypeScript: npm install -g typescript
tsc 03_typescript_basics.ts
node 03_typescript_basics.js
```

## 重点学习

**异步编程示例 (04_async_programming.js) 是最重要的**，包含：

1. **Callback vs Promise vs async/await**：理解三种异步方式的演进
2. **Promise基础**：创建和使用Promise
3. **async/await语法**：让异步代码更清晰
4. **并发执行**：Promise.all同时处理多个任务
5. **错误处理**：try-catch和Promise.allSettled
6. **流式响应**：模拟AI流式输出
7. **实际应用场景**：模拟并发调用多个AI API

掌握异步编程是后续开发AI Agent的关键技能。

## 学习建议

1. **初学者**：按顺序运行01→02→03→04→05
2. **有经验者**：重点运行04（异步编程）和05（API调用）
3. **所有人**：务必理解04中的Promise和async/await

## ES Modules vs CommonJS

本示例使用CommonJS语法（require/module.exports），如需使用ES Modules：

1. 在package.json中添加 `"type": "module"`
2. 使用import/export语法：
   ```javascript
   // 导入
   import fs from 'fs';

   // 导出
   export const name = "Alice";
   ```

## 下一步

完成示例学习后：
- 完成JavaScript练习题
- 学习模块1.1的其他知识点
- 准备学习AI基础概念（模块1.2）