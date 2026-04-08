# 第一部分：基础篇 - 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成AI Agent应用开发课程第一部分（基础篇）的所有教程文档、代码示例和入门项目

**Architecture:** 模块化设计，每个知识点独立成文档，配套Python和JavaScript双语言代码示例，采用理论讲解+代码演示+练习题的综合形式

**Tech Stack:** Markdown文档、Python 3.10+、Node.js 18+、TypeScript 5+

---

## 文件结构规划

```
courses/part1-basics/
│
├── README.md                                    # 第一部分总览（已完成）
│
├── module-1.1-programming-basics/
│   ├── README.md                                # 模块总览
│   ├── lessons/
│   │   ├── 1.1.1-python-quickstart.md           # Python快速入门
│   │   ├── 1.1.2-javascript-typescript.md       # JavaScript/TypeScript入门
│   │   └── 1.1.3-common-concepts.md             # 通用编程概念
│   ├── examples/
│   │   ├── python/
│   │   │   ├── 01_hello_world.py
│   │   │   ├── 02_basic_syntax.py
│   │   │   ├── 03_functions_classes.py
│   │   │   ├── 04_async_programming.py
│   │   │   ├── 05_api_basics.py
│   │   │   └ README.md
│   │   └ javascript/
│   │   │   ├── 01_hello_world.js
│   │   │   ├── 02_basic_syntax.js
│   │   │   ├── 03_typescript_basics.ts
│   │   │   ├── 04_async_programming.js
│   │   │   ├── 05_api_basics.js
│   │   │   ├── README.md
│   ├── exercises/
│   │   ├── python_exercises.md
│   │   ├── javascript_exercises.md
│   │   └ solutions/
│   │   │   ├── python_solutions.md
│   │   │   └ javascript_solutions.md
│
├── module-1.2-ai-concepts/
│   ├── README.md
│   ├── lessons/
│   │   ├── 1.2.1-what-is-ai.md
│   │   ├── 1.2.2-llm-principles.md
│   │   ├── 1.2.3-agent-concepts.md
│   ├── exercises/
│   │   ├── ai_concepts_quiz.md
│   │   └ solutions/
│   │   │   ├── quiz_solutions.md
│
├── module-1.3-tools-chain/
│   ├── README.md
│   ├── lessons/
│   │   ├── 1.3.1-development-env.md
│   │   ├── 1.3.2-api-calling-basics.md
│   │   ├── 1.3.3-debugging-testing.md
│   ├── examples/
│   │   ├── python/
│   │   │   ├── 01_api_openai.py
│   │   │   ├── 02_api_claude.py
│   │   │   ├── 03_api_error_handling.py
│   │   │   ├── 04_unit_testing.py
│   │   │   ├── README.md
│   │   │   ├── requirements.txt
│   │   ├── javascript/
│   │   │   ├── 01_api_openai.js
│   │   │   ├── 02_api_claude.js
│   │   │   ├── 03_api_error_handling.js
│   │   │   ├── 04_unit_testing.js
│   │   │   ├── README.md
│   │   │   ├── package.json
│   ├── exercises/
│   │   ├── api_practice.md
│   │   └ solutions/
│   │   │   ├── python_api_solutions.md
│   │   │   ├── javascript_api_solutions.md
│
├── module-1.4-first-project/
│   ├── README.md
│   ├── lessons/
│   │   ├── 1.4.1-first-python-project.md
│   │   ├── 1.4.2-first-javascript-project.md
│   ├── project/
│   │   ├── python/
│   │   │   ├── simple_chatbot.py
│   │   │   ├── README.md
│   │   │   ├── requirements.txt
│   │   │   ├── .env.example
│   │   ├── javascript/
│   │   │   ├── simple_chatbot.js
│   │   │   ├── README.md
│   │   │   ├── package.json
│   │   │   ├── .env.example
```

---

## Task 1: 创建模块1.1总览文档

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/README.md`

- [ ] **Step 1: 创建模块总览文档**

创建模块总览文档，说明模块的学习目标、课时安排、知识点列表和学习建议。

---

## Task 2: 创建Python快速入门教程

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/lessons/1.1.1-python-quickstart.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. Python简介与应用领域
2. 环境搭建（Python安装、虚拟环境、IDE配置）
3. 基本语法（变量、数据类型、运算符）
4. 数据结构（列表、字典、集合、元组）
5. 控制流（if、for、while）
6. 函数定义与调用
7. 类与对象基础
8. 异步编程基础（async/await） - 重点
9. 模块与包管理
10. 实践建议

---

## Task 3: 创建Python代码示例包

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/python/01_hello_world.py`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/python/02_basic_syntax.py`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/python/03_functions_classes.py`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/python/04_async_programming.py`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/python/05_api_basics.py`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/python/README.md`

- [ ] **Step 1: 创建hello_world示例**
- [ ] **Step 2: 创建基本语法示例**
- [ ] **Step 3: 创建函数和类示例**
- [ ] **Step 4: 创建异步编程示例** - 重点展示async/await用法
- [ ] **Step 5: 创建API基础示例** - 展示HTTP请求基础
- [ ] **Step 6: 创建示例包README**

---

## Task 4: 创建JavaScript/TypeScript教程

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/lessons/1.1.2-javascript-typescript.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. JavaScript简介与应用领域
2. Node.js环境搭建
3. JavaScript基本语法（ES6+特性）
4. 数据类型与数据结构
5. 控制流与运算符
6. 函数定义（箭头函数、默认参数）
7. TypeScript基础（类型系统）
8. 异步编程（Promise、async/await） - 重点
9. 模块系统（ES Modules）
10. npm包管理

---

## Task 5: 创建JavaScript代码示例包

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/javascript/01_hello_world.js`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/javascript/02_basic_syntax.js`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/javascript/03_typescript_basics.ts`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/javascript/04_async_programming.js`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/javascript/05_api_basics.js`
- Create: `courses/part1-basics/module-1.1-programming-basics/examples/javascript/README.md`

- [ ] **Step 1: 创建hello_world示例**
- [ ] **Step 2: 创建基本语法示例**
- [ ] **Step 3: 创建TypeScript基础示例**
- [ ] **Step 4: 创建异步编程示例** - 重点展示Promise和async/await
- [ ] **Step 5: 创建API基础示例**
- [ ] **Step 6: 创建示例包README**

---

## Task 6: 创建通用编程概念教程

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/lessons/1.1.3-common-concepts.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. API基础概念（什么是API、API类型）
2. HTTP协议基础（请求方法、状态码、Headers）
3. REST API设计原则
4. JSON数据格式详解
5. 版本控制基础（Git核心概念、常用命令）
6. 包管理（pip、npm、虚拟环境）
7. 开发工具链概览

---

## Task 7: 创建模块1.1练习题

**Files:**
- Create: `courses/part1-basics/module-1.1-programming-basics/exercises/python_exercises.md`
- Create: `courses/part1-basics/module-1.1-programming-basics/exercises/javascript_exercises.md`
- Create: `courses/part1-basics/module-1.1-programming-basics/exercises/solutions/python_solutions.md`
- Create: `courses/part1-basics/module-1.1-programming-basics/exercises/solutions/javascript_solutions.md`

- [ ] **Step 1: 设计Python练习题（10题）**
- [ ] **Step 2: 设计JavaScript练习题（10题）**
- [ ] **Step 3: 编写Python练习答案**
- [ ] **Step 4: 编写JavaScript练习答案**

---

## Task 8: 创建模块1.2总览文档

**Files:**
- Create: `courses/part1-basics/module-1.2-ai-concepts/README.md`

- [ ] **Step 1: 创建模块总览**

说明模块的学习目标、课时安排和AI概念的重要性。

---

## Task 9: 创建"什么是AI"教程

**Files:**
- Create: `courses/part1-basics/module-1.2-ai-concepts/lessons/1.2.1-what-is-ai.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. AI定义与发展简史
2. AI的分类（监督学习、无监督学习、强化学习）
3. AI vs ML vs DL的关系图解
4. AI的应用领域概览
5. 当前AI发展的里程碑事件
6. AI的未来趋势

---

## Task 10: 创建"大语言模型原理"教程

**Files:**
- Create: `courses/part1-basics/module-1.2-ai-concepts/lessons/1.2.2-llm-principles.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. 语言模型的发展历程
2. Transformer架构核心原理
3. 注意力机制详解
4. 训练过程：预训练、微调、RLHF
5. 主流LLM介绍（GPT、Claude、Gemini、LLaMA等）
6. 模型能力与局限性分析
7. Token与上下文窗口概念

---

## Task 11: 创建"Agent概念入门"教程

**Files:**
- Create: `courses/part1-basics/module-1.2-ai-concepts/lessons/1.2.3-agent-concepts.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. Agent的定义
2. Agent vs Chatbot的区别
3. Agent的核心组件：
   - 感知（Perception）
   - 决策（Decision/Reasoning）
   - 执行（Action/Tools）
4. Agent的工作流程图解
5. Agent的应用场景案例
6. Agent框架概览（LangChain、AutoGen、CrewAI）

---

## Task 12: 创建模块1.2练习题

**Files:**
- Create: `courses/part1-basics/module-1.2-ai-concepts/exercises/ai_concepts_quiz.md`
- Create: `courses/part1-basics/module-1.2-ai-concepts/exercises/solutions/quiz_solutions.md`

- [ ] **Step 1: 设计AI概念测验（20题）**
- [ ] **Step 2: 编写测验答案和解析**

---

## Task 13: 创建模块1.3总览文档

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/README.md`

- [ ] **Step 1: 创建模块总览**

说明开发工具链的重要性，强调API密钥安全管理。

---

## Task 14: 创建"开发环境配置"教程

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/lessons/1.3.1-development-env.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. IDE选择与配置（VS Code、Cursor）
2. Python开发环境：
   - Python安装与版本管理
   - pip与虚拟环境（venv、conda）
   - 常用扩展推荐
3. JavaScript开发环境：
   - Node.js安装
   - npm/yarn/pnpm
   - 常用扩展推荐
4. API密钥管理：
   - .env文件配置
   - 密钥安全最佳实践
   - 密钥轮换策略
5. Git配置基础

---

## Task 15: 创建"API调用基础"教程

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/lessons/1.3.2-api-calling-basics.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. API调用流程图解
2. OpenAI API基础：
   - API Key获取
   - 基础调用示例
   - 参数说明（model、temperature等）
3. Claude API基础：
   - API Key获取
   - 基础调用示例
   - 与OpenAI的差异
4. API计费理解（Token计费模式）
5. 常见错误与处理

---

## Task 16: 创建API调用Python代码示例

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/python/01_api_openai.py`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/python/02_api_claude.py`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/python/03_api_error_handling.py`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/python/README.md`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/python/requirements.txt`

- [ ] **Step 1: 创建OpenAI API调用示例**
- [ ] **Step 2: 创建Claude API调用示例**
- [ ] **Step 3: 创建错误处理示例**
- [ ] **Step 4: 创建requirements.txt**
- [ ] **Step 5: 创建示例README**

---

## Task 17: 创建API调用JavaScript代码示例

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/javascript/01_api_openai.js`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/javascript/02_api_claude.js`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/javascript/03_api_error_handling.js`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/javascript/README.md`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/javascript/package.json`

- [ ] **Step 1: 创建OpenAI API调用示例**
- [ ] **Step 2: 创建Claude API调用示例**
- [ ] **Step 3: 创建错误处理示例**
- [ ] **Step 4: 创建package.json**
- [ ] **Step 5: 创建示例README**

---

## Task 18: 创建"调试与测试基础"教程

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/lessons/1.3.3-debugging-testing.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. 单元测试概念
2. Python测试（pytest基础）
3. JavaScript测试（Jest基础）
4. 调试技巧：
   - print/logging调试
   - IDE断点调试
   - 常见调试场景
5. 日志记录最佳实践

---

## Task 19: 创建调试测试代码示例

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/python/04_unit_testing.py`
- Create: `courses/part1-basics/module-1.3-tools-chain/examples/javascript/04_unit_testing.js`

- [ ] **Step 1: 创建Python单元测试示例**
- [ ] **Step 2: 创建JavaScript单元测试示例**

---

## Task 20: 创建模块1.3练习题

**Files:**
- Create: `courses/part1-basics/module-1.3-tools-chain/exercises/api_practice.md`
- Create: `courses/part1-basics/module-1.3-tools-chain/exercises/solutions/python_api_solutions.md`
- Create: `courses/part1-basics/module-1.3-tools-chain/exercises/solutions/javascript_api_solutions.md`

- [ ] **Step 1: 设计API调用练习题（5题）**
- [ ] **Step 2: 编写Python练习答案**
- [ ] **Step 3: 编写JavaScript练习答案**

---

## Task 21: 创建模块1.4总览文档

**Files:**
- Create: `courses/part1-basics/module-1.4-first-project/README.md`

- [ ] **Step 1: 创建模块总览**

说明入门项目的学习目标和项目结构。

---

## Task 22: 创建"第一个Python AI程序"教程

**Files:**
- Create: `courses/part1-basics/module-1.4-first-project/lessons/1.4.1-first-python-project.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. 项目目标说明
2. 项目结构设计
3. 环境配置步骤
4. 代码实现讲解（逐行解析）
5. 运行与测试
6. 扩展建议

---

## Task 23: 创建Python入门项目代码

**Files:**
- Create: `courses/part1-basics/module-1.4-first-project/project/python/simple_chatbot.py`
- Create: `courses/part1-basics/module-1.4-first-project/project/python/README.md`
- Create: `courses/part1-basics/module-1.4-first-project/project/python/requirements.txt`
- Create: `courses/part1-basics/module-1.4-first-project/project/python/.env.example`

- [ ] **Step 1: 创建简单聊天机器人代码**
- [ ] **Step 2: 创建项目README**
- [ ] **Step 3: 创建requirements.txt**
- [ ] **Step 4: 创建.env.example模板**

---

## Task 24: 创建"第一个JavaScript AI程序"教程

**Files:**
- Create: `courses/part1-basics/module-1.4-first-project/lessons/1.4.2-first-javascript-project.md`

- [ ] **Step 1: 编写教程内容**

教程大纲：
1. 项目目标说明
2. 项目结构设计
3. 环境配置步骤
4. 代码实现讲解（逐行解析）
5. 运行与测试
6. 扩展建议

---

## Task 25: 创建JavaScript入门项目代码

**Files:**
- Create: `courses/part1-basics/module-1.4-first-project/project/javascript/simple_chatbot.js`
- Create: `courses/part1-basics/module-1.4-first-project/project/javascript/README.md`
- Create: `courses/part1-basics/module-1.4-first-project/project/javascript/package.json`
- Create: `courses/part1-basics/module-1.4-first-project/project/javascript/.env.example`

- [ ] **Step 1: 创建简单聊天机器人代码**
- [ ] **Step 2: 创建项目README**
- [ ] **Step 3: 创建package.json**
- [ ] **Step 4: 创建.env.example模板**

---

## Task 26: 最终检查与提交

- [ ] **Step 1: 检查所有文件完整性**
- [ ] **Step 2: 验证代码示例可运行**
- [ ] **Step 3: 检查文档链接正确性**
- [ ] **Step 4: 更新courses/README.md，标注第一部分已完成**

---

## 预估工作量

- 教程文档：13个markdown文件
- 代码示例：约20个代码文件
- 练习题：6个文件
- 项目代码：8个文件
- 总计：约47个文件

## 实施顺序

建议按以下顺序实施：
1. 先完成模块1.1（编程基础）- 最基础，为后续铺垫
2. 再完成模块1.2（AI概念）- 理论基础
3. 接着完成模块1.3（工具链）- 实践基础
4. 最后完成模块1.4（入门项目）- 综合实践

每个模块完成后可以独立交付，学员可以边学边等后续模块更新。