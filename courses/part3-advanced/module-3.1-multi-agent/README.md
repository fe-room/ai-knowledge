# 模块3.1：多Agent系统

> 掌握多Agent协作的设计与实现

## 学习目标

完成本模块后，你将能够：
- 理解多Agent协作原理
- 使用CrewAI框架开发多Agent系统
- 使用AutoGen框架实现Agent对话
- 设计多Agent协作模式

**课时安排**：10课时

## 核心概念

**多Agent系统 = 多个Agent协同工作**

```
单Agent：
用户 → Agent → 结果

多Agent：
用户 → 协调Agent → Agent1 → 结果
                  → Agent2 →
                  → Agent3 →
                  ↓
              整合输出
```

**为什么需要多Agent？**
- 任务分解：复杂任务拆分为简单任务
- 专业分工：不同Agent专注不同领域
- 互相验证：交叉检查提高准确性
- 并行处理：提高执行效率

## 知识点列表

### 3.1.1 多Agent协作原理（2课时）⭐
- 协作模式分类
- 角色定义方法
- 任务分配策略

**学习资源**：
- [教程文档](./lessons/3.1.1-multi-agent-basics.md)

### 3.1.2 CrewAI框架实战（3课时）⭐
- CrewAI架构
- Agent/Task/Crew定义
- Process模式

**学习资源**：
- [教程文档](./lessons/3.1.2-crewai-framework.md)

### 3.1.3 AutoGen框架实战（3课时）
- AutoGen核心概念
- Group Chat模式
- 对话管理

**学习资源**：
- [教程文档](./lessons/3.1.3-autogen-framework.md)

### 3.1.4 LangGraph多Agent（2课时）
- 状态图设计
- Agent通信机制
- 循环控制

**学习资源**：
- [教程文档](./lessons/3.1.4-langgraph-multi-agent.md)

## 核心示例

### CrewAI基础

```python
from crewai import Agent, Task, Crew

# 定义Agent
researcher = Agent(
    role="研究员",
    goal="收集相关信息",
    backstory="经验丰富的研究专家",
    llm=ChatOpenAI(model="gpt-4")
)

writer = Agent(
    role="作家",
    goal="撰写高质量文章",
    backstory="专业的内容创作者",
    llm=ChatOpenAI(model="gpt-4")
)

# 定义任务
research_task = Task(
    description="研究AI发展趋势",
    agent=researcher
)

write_task = Task(
    description="撰写AI趋势报告",
    agent=writer
)

# 组建团队
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task]
)

# 执行
result = crew.kickoff()
```

### AutoGen基础

```python
import autogen

# 创建Agent
assistant = autogen.AssistantAgent(
    name="assistant",
    llm_config={"model": "gpt-4"}
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="TERMINATE"
)

# 开始对话
user_proxy.initiate_chat(
    assistant,
    message="帮我分析市场趋势"
)
```

## 学习建议

- 理解协作模式选择合适的框架
- 从简单的两个Agent开始
- 逐步增加Agent数量和复杂度
- 注意Agent间的通信效率

## 下一步

完成本模块后，继续学习：
- [模块3.2：Agent记忆与上下文管理](../module-3.2-memory-context/README.md)