# 模块2.5：Agent工具集成

> 让Agent拥有调用外部工具的能力

## 学习目标

完成本模块后，你将能够：
- 理解Function Calling机制
- 定义和使用各种工具
- 开发自定义工具
- 实现安全的工具调用

**课时安排**：8课时

## 核心概念

**工具是Agent的手脚**

Agent通过工具与外部世界交互：
- 搜索引擎 → 获取信息
- 计算器 → 数学运算
- 数据库 → 数据操作
- API调用 → 服务集成

```
Agent大脑（LLM）
      │
      ↓ 分析任务，决定调用什么工具
      │
┌─────┴─────┬─────────┬─────────┐
│           │         │         │
↓           ↓         ↓         ↓
搜索工具   计算器    数据库    自定义工具
```

## 知识点列表

### 2.5.1 函数调用基础（2课时）⭐
- Function Calling原理
- 工具定义规范
- 参数验证

**学习资源**：
- [教程文档](./lessons/2.5.1-function-calling.md)

### 2.5.2 外部工具集成（2课时）
- 搜索工具
- 数据库工具
- API工具

**学习资源**：
- [教程文档](./lessons/2.5.2-external-tools.md)

### 2.5.3 自定义工具开发（2课时）⭐
- 工具设计原则
- 错误处理
- 工具组合

**学习资源**：
- [教程文档](./lessons/2.5.3-custom-tools.md)

### 2.5.4 工具安全与控制（2课时）
- 权限管理
- 执行边界
- 安全最佳实践

**学习资源**：
- [教程文档](./lessons/2.5.4-tool-security.md)

## 核心示例

### 工具定义

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": "搜索互联网获取信息",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "搜索关键词"
                    }
                },
                "required": ["query"]
            }
        }
    }
]
```

### 工具调用

```python
# LLM决定调用工具
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=messages,
    tools=tools
)

# 执行工具
if response.choices[0].message.tool_calls:
    tool_call = response.choices[0].message.tool_calls[0]
    result = execute_tool(tool_call.function.name,
                         json.loads(tool_call.function.arguments))
```

## 学习建议

- 从简单工具开始
- 理解工具调用流程
- 实践自定义工具开发
- 注意安全问题

## 下一步

完成本模块后，你已经掌握核心篇所有内容！继续学习：
- [第三部分：进阶篇](../../part3-advanced/README.md)
  - 多Agent系统
  - 记忆与上下文管理
  - 评估与优化
  - 部署与运维