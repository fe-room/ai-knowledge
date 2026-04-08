# 模块2.2：LLM API开发实战

> 深入掌握OpenAI和Claude API的高级用法

## 学习目标

完成本模块后，你将能够：
- 深入理解API参数及其调优
- 实现生产级的API调用
- 处理复杂的错误场景
- 构建多模型统一接口
- 优化API调用成本

**课时安排**：10课时

## 知识点列表

### 2.2.1 OpenAI API深度实践（3课时）⭐
- API参数详解
- 高级功能（流式、函数调用）
- 最佳实践

**学习资源**：
- [教程文档](./lessons/2.2.1-openai-deep-dive.md)
- [Python示例](./examples/python/)
- [JavaScript示例](./examples/javascript/)

### 2.2.2 Claude API深度实践（2课时）
- Claude API特性
- 与OpenAI的差异
- 高级用法

**学习资源**：
- [教程文档](./lessons/2.2.2-claude-deep-dive.md)

### 2.2.3 其他主流API（1课时）
- Google Gemini
- 国内模型API
- API适配策略

**学习资源**：
- [教程文档](./lessons/2.2.3-other-apis.md)

### 2.2.4 API最佳实践（2课时）⭐
- 错误处理策略
- 重试机制
- 并发控制
- 日志监控

**学习资源**：
- [教程文档](./lessons/2.2.4-best-practices.md)

### 2.2.5 多模型统一接口（2课时）
- 统一API设计
- 模型切换
- 负载均衡

**学习资源**：
- [教程文档](./lessons/2.2.5-multi-model-interface.md)

## 核心技能

### API参数调优

```python
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=messages,
    temperature=0.7,      # 控制随机性
    max_tokens=1000,      # 最大输出长度
    top_p=0.9,            # 核采样
    frequency_penalty=0,  # 频率惩罚
    presence_penalty=0,   # 存在惩罚
    stream=True           # 流式输出
)
```

### 错误处理

```python
async def call_with_retry(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return await func()
        except RateLimitError:
            await asyncio.sleep(2 ** attempt)
        except APIError as e:
            if attempt == max_retries - 1:
                raise
```

### 函数调用

```python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "获取天气信息",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string"}
            }
        }
    }
}]
```

## 学习建议

- 动手运行每个代码示例
- 理解每个参数的作用
- 实践错误处理场景
- 构建自己的API客户端库

## 下一步

完成本模块后，继续学习：
- [模块2.3：Agent架构设计](../module-2.3-agent-architecture/README.md)