# Python代码示例包

本目录包含Python基础语法和异步编程的示例代码，帮助学员掌握AI应用开发所需的Python技能。

## 示例文件列表

| 文件 | 内容 | 重点 |
|------|------|------|
| [01_hello_world.py](./01_hello_world.py) | Hello World基础 | Python入门 |
| [02_basic_syntax.py](./02_basic_syntax.py) | 基本语法、数据结构、控制流 | Python基础 |
| [03_functions_classes.py](./03_functions_classes.py) | 函数、类、继承、装饰器 | Python进阶 |
| [04_async_programming.py](./04_async_programming.py) | 异步编程详解 | ⭐ **重点** |
| [05_api_basics.py](./05_api_basics.py) | HTTP请求、API调用基础 | API基础 |

## 运行环境要求

- Python 3.10或更高版本
- 依赖包（见下方）

## 安装依赖

```bash
# 创建虚拟环境（推荐）
python -m venv venv
source venv/bin/activate  # macOS/Linux
# 或 venv\Scripts\activate  # Windows

# 安装依赖
pip install requests aiohttp
```

## 运行示例

```bash
# 运行单个示例
python 01_hello_world.py

# 运行异步编程示例（重点）
python 04_async_programming.py

# 运行API示例
python 05_api_basics.py
```

## 重点学习

**异步编程示例 (04_async_programming.py) 是最重要的**，包含：

1. **同步vs异步对比**：理解为什么异步更快
2. **async/await语法**：Python异步编程基础
3. **并发执行**：使用asyncio.gather同时处理多个任务
4. **任务管理**：create_task创建后台任务
5. **错误处理**：超时和异常处理
6. **流式响应**：异步生成器模拟AI流式输出
7. **实际应用场景**：模拟并发调用多个AI API

掌握异步编程是后续开发AI Agent的关键技能。

## 学习建议

1. **初学者**：按顺序运行01→02→03→04→05
2. **有经验者**：重点运行04（异步编程）和05（API调用）
3. **所有人**：务必理解04中的async/await和并发执行

## 下一步

完成示例学习后：
- 完成Python练习题
- 学习模块1.1的其他知识点
- 准备学习AI基础概念（模块1.2）