# 模块2.3：Agent架构设计

> 掌握AI Agent的设计与实现，构建智能自主系统

## 学习目标

完成本模块后，你将能够：
- 理解Agent的核心组件和架构
- 实现ReAct和Plan-and-Execute模式
- 使用LangChain和LangGraph开发Agent
- 选择合适的Agent框架

**课时安排**：12课时

## 核心概念

**Agent是什么？**

Agent是能够自主感知、决策、执行的系统。与普通聊天机器人不同，Agent可以：
- 自主规划和分解任务
- 调用外部工具完成任务
- 根据结果调整策略
- 完成复杂的多步骤任务

```
普通Chatbot：
用户输入 → LLM → 文本输出

Agent：
用户输入 → 感知 → 规划 → 执行（调用工具）→ 观察 → 继续执行 → 最终输出
```

## 知识点列表

### 2.3.1 Agent基础架构（2课时）
- Agent核心组件
- 工作流程设计
- 简单Agent实现

**学习资源**：
- [教程文档](./lessons/2.3.1-agent-basics.md)

### 2.3.2 ReAct Agent（2课时）⭐
- ReAct原理详解
- 推理+行动模式
- 实现ReAct Agent

**学习资源**：
- [教程文档](./lessons/2.3.2-react-agent.md)

### 2.3.3 Plan-and-Execute Agent（2课时）
- 任务规划原理
- 分步执行策略
- 实现规划型Agent

**学习资源**：
- [教程文档](./lessons/2.3.3-plan-execute.md)

### 2.3.4 LangChain框架实战（3课时）⭐⭐
- LangChain核心概念
- Chains、Agents、Tools
- Memory管理
- 完整Agent开发

**学习资源**：
- [教程文档](./lessons/2.3.4-langchain.md)
- [Python示例](./examples/python/)
- [JavaScript示例](./examples/javascript/)

### 2.3.5 LangGraph与状态管理（2课时）
- LangGraph概念
- 状态图设计
- 多Agent协调

**学习资源**：
- [教程文档](./lessons/2.3.5-langgraph.md)

### 2.3.6 Agent框架对比（1课时）
- LangChain vs CrewAI vs AutoGen
- 框架选择策略

**学习资源**：
- [教程文档](./lessons/2.3.6-framework-comparison.md)

## 核心架构

### Agent基础架构

```
┌─────────────────────────────────────────────────────┐
│                    Agent系统                         │
│                                                     │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────┐│
│  │    感知      │ →  │    决策     │ →  │   执行   ││
│  │ Perception  │    │  Decision   │    │ Action  ││
│  └─────────────┘    └─────────────┘    └─────────┘│
│        ↑                  │                 │     │
│        │                  ↓                 ↓     │
│   ┌────────┐         ┌─────────┐       ┌────────┐ │
│   │ 环境    │         │  记忆   │       │  工具   │ │
│   └────────┘         └─────────┘       └────────┘ │
└─────────────────────────────────────────────────────┘
```

### LangChain Agent架构

```
┌─────────────────────────────────────────────────────┐
│              LangChain Agent                         │
│                                                     │
│  ┌───────────┐   ┌───────────┐   ┌───────────────┐│
│  │   Agent   │ → │   Tools   │ → │  LLM Chain    ││
│  │ Executor  │   │   工具集   │   │  语言模型链   ││
│  └───────────┘   └───────────┘   └───────────────┘│
│        │                                   │       │
│        └─────────── Memory ─────────────────┘       │
│                   记忆管理                          │
└─────────────────────────────────────────────────────┘
```

## 学习路径

```
理解Agent概念
      ↓
实现简单Agent
      ↓
学习ReAct模式
      ↓
掌握LangChain框架
      ↓
使用LangGraph管理复杂流程
      ↓
选择合适的框架开发实际应用
```

## 实践建议

**动手实践**：
- 每个模式都要亲自实现
- 使用提供的代码示例
- 尝试修改和扩展

**项目导向**：
- 完成一个研究助手Agent
- 完成一个代码助手Agent
- 完成一个数据分析Agent

## 下一步

完成本模块后，继续学习：
- [模块2.4：RAG技术](../module-2.4-rag/README.md)
- [模块2.5：Agent工具集成](../module-2.5-tool-integration/README.md)