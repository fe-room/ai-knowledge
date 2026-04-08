# 第二部分：核心篇

> 掌握AI应用开发的核心技能：Prompt工程、API开发、Agent架构、RAG技术

## 学习目标

完成本部分后，你将能够：
- 熟练使用高级Prompt Engineering技术
- 深入掌握OpenAI/Claude API开发
- 设计和实现AI Agent系统
- 构建RAG知识库应用
- 开发生产级AI应用

**课时安排**：40-50课时

## 模块列表

### 模块2.1：Prompt Engineering（8课时）
- [2.1.1 提示词基础](./module-2.1-prompt-engineering/lessons/2.1.1-prompt-basics.md)
- [2.1.2 高级提示词技术](./module-2.1-prompt-engineering/lessons/2.1.2-advanced-techniques.md)
- [2.1.3 提示词模板管理](./module-2.1-prompt-engineering/lessons/2.1.3-template-management.md)
- [2.1.4 提示词优化与评估](./module-2.1-prompt-engineering/lessons/2.1.4-optimization-evaluation.md)

**重点**：
- Zero-shot/Few-shot学习
- Chain-of-Thought思维链
- ReAct框架
- 提示词模板设计

### 模块2.2：LLM API开发实战（10课时）
- [2.2.1 OpenAI API深度实践](./module-2.2-llm-api/lessons/2.2.1-openai-deep-dive.md)
- [2.2.2 Claude API深度实践](./module-2.2-llm-api/lessons/2.2.2-claude-deep-dive.md)
- [2.2.3 其他主流API](./module-2.2-llm-api/lessons/2.2.3-other-apis.md)
- [2.2.4 API最佳实践](./module-2.2-llm-api/lessons/2.2.4-best-practices.md)
- [2.2.5 多模型统一接口](./module-2.2-llm-api/lessons/2.2.5-multi-model-interface.md)

**重点**：
- API参数调优
- 流式响应处理
- 错误处理与重试
- 成本优化策略

### 模块2.3：Agent架构设计（12课时）
- [2.3.1 Agent基础架构](./module-2.3-agent-architecture/lessons/2.3.1-agent-basics.md)
- [2.3.2 ReAct Agent](./module-2.3-agent-architecture/lessons/2.3.2-react-agent.md)
- [2.3.3 Plan-and-Execute Agent](./module-2.3-agent-architecture/lessons/2.3.3-plan-execute.md)
- [2.3.4 LangChain框架实战](./module-2.3-agent-architecture/lessons/2.3.4-langchain.md)
- [2.3.5 LangGraph与状态管理](./module-2.3-agent-architecture/lessons/2.3.5-langgraph.md)
- [2.3.6 Agent框架对比](./module-2.3-agent-architecture/lessons/2.3.6-framework-comparison.md)

**重点**：
- Agent核心组件设计
- ReAct推理+行动模式
- LangChain Agent开发
- LangGraph状态管理

### 模块2.4：RAG技术（10课时）
- [2.4.1 RAG基础概念](./module-2.4-rag/lessons/2.4.1-rag-basics.md)
- [2.4.2 文档处理与分块](./module-2.4-rag/lessons/2.4.2-document-processing.md)
- [2.4.3 向量数据库](./module-2.4-rag/lessons/2.4.3-vector-databases.md)
- [2.4.4 检索策略优化](./module-2.4-rag/lessons/2.4.4-retrieval-optimization.md)
- [2.4.5 RAG完整Pipeline](./module-2.4-rag/lessons/2.4.5-rag-pipeline.md)
- [2.4.6 RAG评估与改进](./module-2.4-rag/lessons/2.4.6-rag-evaluation.md)

**重点**：
- 向量检索原理
- 文档分块策略
- 检索增强生成
- RAG系统评估

### 模块2.5：Agent工具集成（8课时）
- [2.5.1 函数调用基础](./module-2.5-tool-integration/lessons/2.5.1-function-calling.md)
- [2.5.2 外部工具集成](./module-2.5-tool-integration/lessons/2.5.2-external-tools.md)
- [2.5.3 自定义工具开发](./module-2.5-tool-integration/lessons/2.5.3-custom-tools.md)
- [2.5.4 工具安全与控制](./module-2.5-tool-integration/lessons/2.5.4-tool-security.md)

**重点**：
- Function Calling机制
- 工具定义与调用
- 工具组合与编排
- 安全最佳实践

## 学习路径

```
第一部分基础篇
      ↓
┌─────────────────────────────────────────────┐
│          第二部分核心篇                       │
│                                             │
│  Prompt Engineering → LLM API → Agent架构   │
│           ↓                              ↓  │
│      RAG技术 ←─────────────────── 工具集成   │
│                                             │
└─────────────────────────────────────────────┘
      ↓
第三部分进阶篇
```

**建议学习顺序**：
1. 模块2.1（Prompt Engineering）- 与LLM交互的基础
2. 模块2.2（LLM API）- API深度使用
3. 模块2.3（Agent架构）- Agent开发核心
4. 模块2.4（RAG技术）- 知识增强
5. 模块2.5（工具集成）- Agent能力扩展

## 学习建议

**核心篇是整个课程的精华**：
- 每个模块都有大量代码示例
- 重点知识点需要反复练习
- 完成所有练习题
- 动手实现每个示例

**时间分配建议**：
- Prompt Engineering：1周
- LLM API开发：1-2周
- Agent架构：2周
- RAG技术：1-2周
- 工具集成：1周

## 实践项目

完成核心篇后，你将能够独立开发：
- 高级聊天机器人（多轮对话、上下文管理）
- 知识库问答系统（RAG）
- 简单AI Agent（工具调用）
- 多模型切换应用

## 下一步

完成核心篇后，继续学习：
- [第三部分：进阶篇](../part3-advanced/README.md)
  - 多Agent系统
  - 记忆与上下文管理
  - 评估与优化
  - 部署与运维