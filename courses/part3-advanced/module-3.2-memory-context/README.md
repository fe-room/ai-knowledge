# 模块3.2：Agent记忆与上下文管理

> 让Agent拥有记忆，管理长对话

## 学习目标

完成本模块后，你将能够：
- 实现短期记忆管理
- 构建长期记忆系统
- 优化上下文窗口使用
- 设计记忆检索机制

**课时安排**：8课时

## 核心概念

**Agent记忆 = 保持上下文连续性**

```
记忆类型：

短期记忆（Working Memory）
├── 对话历史
├── 当前任务状态
└── 临时信息

长期记忆（Long-term Memory）
├── 知识库
├── 历史交互
└── 学习到的知识
```

**记忆挑战**：
- Token限制
- 信息遗忘
- 检索效率
- 更新策略

## 知识点列表

### 3.2.1 短期记忆管理（2课时）⭐
- Conversation Memory
- 消息历史管理
- Token限制处理

**学习资源**：
- [教程文档](./lessons/3.2.1-short-term-memory.md)

### 3.2.2 长期记忆管理（2课时）⭐
- 向量存储记忆
- 知识图谱记忆
- 记忆持久化

**学习资源**：
- [教程文档](./lessons/3.2.2-long-term-memory.md)

### 3.2.3 记忆优化策略（2课时）
- 记忆压缩
- 重要信息提取
- 遗忘机制

**学习资源**：
- [教程文档](./lessons/3.2.3-memory-optimization.md)

### 3.2.4 上下文窗口优化（2课时）
- 大文档处理
- 上下文切片
- 动态加载

**学习资源**：
- [教程文档](./lessons/3.2.4-context-optimization.md)

## 核心示例

### 对话记忆

```python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    return_messages=True
)

# 保存交互
memory.save_context(
    {"input": "你好"},
    {"output": "你好！有什么可以帮助你的？"}
)

# 获取历史
history = memory.load_memory_variables({})
```

### 向量记忆

```python
from langchain.memory import VectorStoreRetrieverMemory

vectorstore = Chroma(embedding_function=embeddings)
memory = VectorStoreRetrieverMemory(
    retriever=vectorstore.as_retriever()
)

# 保存记忆
memory.save_context(
    {"input": "我喜欢Python"},
    {"output": "好的，我记住了你喜欢Python"}
)

# 检索相关记忆
relevant = memory.load_memory_variables(
    {"input": "编程语言推荐"}
)
```

## 学习建议

- 根据场景选择记忆类型
- 平衡记忆容量和检索效率
- 定期清理过期记忆
- 测试记忆系统的准确性

## 下一步

完成本模块后，继续学习：
- [模块3.3：评估与优化](../module-3.3-evaluation-optimization/)