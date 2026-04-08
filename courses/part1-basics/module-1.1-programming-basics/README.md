# 模块1.1：编程基础入门

> 为AI应用开发打下坚实的编程基础

## 学习目标

完成本模块后，你将能够：
- 掌握Python和JavaScript的基础语法
- 理解异步编程概念（为Agent开发做准备）
- 使用API进行基本的HTTP请求
- 理解版本控制和包管理的基本概念

**课时安排**：8课时

## 知识点列表

### 1.1.1 Python快速入门（3课时）
- Python简介与应用领域
- 环境搭建与配置
- 基本语法与数据结构
- 函数、类与模块
- **重点**：异步编程基础（async/await）

**学习资源**：
- [教程文档](./lessons/1.1.1-python-quickstart.md)
- [Python代码示例](./examples/python/)
- [练习题](./exercises/python_exercises.md)

### 1.1.2 JavaScript/TypeScript入门（3课时）
- JavaScript简介与应用领域
- Node.js环境搭建
- JavaScript核心语法（ES6+）
- TypeScript基础
- **重点**：异步编程（Promise、async/await）

**学习资源**：
- [教程文档](./lessons/1.1.2-javascript-typescript.md)
- [JavaScript代码示例](./examples/javascript/)
- [练习题](./exercises/javascript_exercises.md)

### 1.1.3 通用编程概念（2课时）
- API与HTTP协议基础
- JSON数据格式
- 版本控制（Git基础）
- 包管理（pip、npm）

**学习资源**：
- [教程文档](./lessons/1.1.3-common-concepts.md)

## 学习建议

**零基础学员**：
1. 完整学习所有三个知识点
2. 重点理解异步编程概念（这是Agent开发的核心）
3. 完成所有练习题
4. 预计学习时间：8课时

**有编程基础学员**：
1. 快速浏览1.1.1和1.1.2，重点看异步编程部分
2. 学习1.1.3的API和Git概念
3. 完成练习题检验理解程度
4. 预计学习时间：2-3课时

## 为什么学习异步编程？

**在AI应用开发中，异步编程至关重要**：
- 调用LLM API需要等待响应（网络请求）
- Agent需要处理多个并发任务
- 流式响应（Streaming）需要异步处理
- 多Agent协作需要并发控制

掌握异步编程是后续学习Agent开发的基础。

## 下一步

完成本模块后，继续学习：
- [模块1.2：AI基础概念](../module-1.2-ai-concepts/)