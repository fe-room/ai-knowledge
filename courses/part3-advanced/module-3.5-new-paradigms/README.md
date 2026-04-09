# 模块3.5：2025 AI Agent 新范式

> 掌握最新的Agent开发范式与技术演进方向

## 学习目标

完成本模块后，你将能够：
- 理解并使用 Model Context Protocol（MCP）构建标准化工具集成
- 使用 OpenAI Assistants API 构建有状态的对话Agent
- 利用推理模型（o1/o3/Claude思维链）提升Agent决策质量
- 设计可组合、可发现的Agent Skill体系
- 构建Harness控制层实现护栏、追踪、评估、回退一体化
- 辨析 Function Calling / Tool / MCP / Skill 的层级关系与适用场景
- 对比不同范式的适用场景，做出合理的技术选型

**课时安排**：16课时

## 核心概念

**2024-2025 Agent技术演进**：

```
2023 ─────────────────────────────────────────────────
  │  LangChain Chains / 手动工具注册 / 无状态对话
  │
2024 ─────────────────────────────────────────────────
  │  Function Calling 标准化
  │  LangGraph 状态图
  │  CrewAI / AutoGen 多Agent
  │
2025 ─────────────────────────────────────────────────
  │  ┌─────────────────────────────────────────────┐
  │  │  MCP：工具集成的"USB协议"                    │
  │  │  Assistants API：托管式有状态Agent            │
  │  │  Reasoning Models：深度推理能力               │
  │  │  Structured Outputs：可靠的输出格式控制       │
  │  │  Agent Skills：可组合的能力体系               │
  │  │  Harness Engineering：工程化控制层            │
  │  └─────────────────────────────────────────────┘
```

**为什么需要了解新范式？**

| 旧模式 | 问题 | 新范式 |
|--------|------|--------|
| 每个Agent手动集成工具 | 重复开发、难以复用 | **MCP**：标准协议，即插即用 |
| 自己管理对话历史和文件 | 状态管理复杂 | **Assistants API**：托管状态管理 |
| 简单 prompt → 单步推理 | 复杂问题推理不足 | **Reasoning Models**：深度思考再输出 |
| 期望JSON但输出不稳定 | 解析频繁失败 | **Structured Outputs**：保证格式合规 |
| Agent能力硬编码，无法复用 | 换场景要重写 | **Agent Skills**：模块化可组合技能 |
| Agent部署后质量不可控 | 幻觉、失控、无法排查 | **Harness Engineering**：工程化控制层 |

## 知识点列表

### 3.5.1 Model Context Protocol（MCP）（3课时）⭐
- MCP协议原理与架构
- MCP Server / Client 开发
- 与现有Agent框架集成

**学习资源**：
- [教程文档](./lessons/3.5.1-mcp.md)

### 3.5.2 OpenAI Assistants API（3课时）⭐
- Assistants API 核心概念
- Threads / Runs / Tools 模型
- 与传统Agent架构的对比

**学习资源**：
- [教程文档](./lessons/3.5.2-assistants-api.md)

### 3.5.3 推理模型与深度思考（2课时）⭐
- o1/o3/Claude Extended Thinking 原理
- 推理模型在Agent中的应用
- 成本与延迟的权衡

**学习资源**：
- [教程文档](./lessons/3.5.3-reasoning-models.md)

### 3.5.4 范式对比与技术选型（2课时）
- 传统Agent vs Assistants API vs MCP
- 选型决策框架
- 混合架构设计

**学习资源**：
- [教程文档](./lessons/3.5.4-paradigm-comparison.md)

### 3.5.5 Agent Skills 体系（2课时）⭐
- Skill结构设计与注册表
- 技能组合与编排模式
- LLM驱动的技能选择

**学习资源**：
- [教程文档](./lessons/3.5.5-agent-skills.md)

### 3.5.6 Harness Engineering（2课时）⭐
- 输入/输出护栏（Guardrails）
- 追踪与可观测性（Tracing）
- 评估框架、分级回退与人工介入

**学习资源**：
- [教程文档](./lessons/3.5.6-harness-engineering.md)

### 3.5.7 能力集成机制对比（2课时）⭐
- Function Calling / Tool / MCP / Skill 四层抽象辨析
- 同一功能的四种实现对比
- 组合使用模式与选型决策

**学习资源**：
- [教程文档](./lessons/3.5.7-capability-comparison.md)

## 核心示例

### MCP工具集成

```python
# MCP Server 定义一个工具
from mcp.server import Server
from mcp.types import Tool

server = Server("weather-server")

@server.tool()
async def get_weather(city: str) -> str:
    """获取城市天气信息"""
    # 任何 MCP Client 都可以调用这个工具
    # 无需针对特定框架编写适配代码
    return f"{city}：晴，25°C"
```

### Assistants API 有状态对话

```python
from openai import OpenAI
client = OpenAI()

# 创建助手（一次性）
assistant = client.beta.assistants.create(
    model="gpt-4o",
    name="数据分析师",
    tools=[{"type": "code_interpreter"}],
    instructions="你是数据分析专家"
)

# 创建对话线程（自动管理历史）
thread = client.beta.threads.create()

# 对话 — 无需自己维护 messages 列表
client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="分析这份销售数据"
)
```

### 推理模型深度思考

```python
# 推理模型：适合需要多步骤推理的Agent决策
response = client.chat.completions.create(
    model="o3-mini",
    reasoning_effort="high",  # low / medium / high
    messages=[{
        "role": "user",
        "content": "设计一个分布式RAG系统架构，需考虑：高并发、数据一致性、故障恢复"
    }]
)
# 模型会在内部进行深度推理后再输出最终方案
```

## 与其他模块的关联

| 关联模块 | 关系 |
|----------|------|
| 2.3 Agent架构 | 本模块是Agent架构的技术演进，理解2.3后学习效果更佳 |
| 2.5 工具集成 | MCP是Function Calling的标准化升级 |
| 3.1 多Agent | MCP可为多Agent提供统一的工具共享层 |
| 3.2 记忆管理 | Assistants API将记忆管理托管，对比自建方案 |
| 3.3 评估优化 | 推理模型改变了成本/质量的权衡方式，Harness是3.3的工程化落地 |

## 学习建议

1. **先完成模块2.3和2.5**：理解传统Agent架构和Function Calling后，才能体会新范式解决了什么问题
2. **动手对比**：用传统方式和新范式分别实现同一个功能，感受差异
3. **关注演进而非替代**：新范式并非完全替代旧方案，各有适用场景
4. **Skills思维**：开始用Skill而非Tool的视角组织Agent能力，提升复用性
5. **Harness先行**：任何Agent上线前，先建好Guardrails和Tracing，再迭代功能
