# 模块2.4：RAG技术

> 掌握检索增强生成技术，构建知识库应用

## 学习目标

完成本模块后，你将能够：
- 理解RAG的原理和应用场景
- 实现文档处理和分块
- 使用向量数据库进行检索
- 构建完整的RAG系统

**课时安排**：10课时

## 核心概念

**什么是RAG？**

RAG（Retrieval-Augmented Generation）= 检索增强生成

```
传统LLM：
用户问题 → LLM → 回答（可能幻觉）

RAG：
用户问题 → 检索知识库 → 获取相关内容 → LLM + 上下文 → 准确回答
```

**为什么需要RAG？**
- 解决知识截止问题
- 减少幻觉
- 支持私有数据
- 可追溯来源

## 知识点列表

### 2.4.1 RAG基础概念（2课时）
- RAG原理与应用场景
- RAG vs 微调
- RAG架构设计

**学习资源**：
- [教程文档](./lessons/2.4.1-rag-basics.md)

### 2.4.2 文档处理与分块（2课时）⭐
- 文档加载与解析
- 分块策略
- 元数据管理

**学习资源**：
- [教程文档](./lessons/2.4.2-document-processing.md)

### 2.4.3 向量数据库（2课时）⭐
- 向量表示与Embedding
- 向量数据库选择
- 向量检索原理

**学习资源**：
- [教程文档](./lessons/2.4.3-vector-databases.md)

### 2.4.4 检索策略优化（2课时）
- 混合检索
- 重排序
- 查询优化

**学习资源**：
- [教程文档](./lessons/2.4.4-retrieval-optimization.md)

### 2.4.5 RAG完整Pipeline（1课时）
- 端到端系统设计
- 知识库构建
- 实时更新策略

**学习资源**：
- [教程文档](./lessons/2.4.5-rag-pipeline.md)

### 2.4.6 RAG评估与改进（1课时）
- 检索质量评估
- 生成质量评估
- 常见问题解决

**学习资源**：
- [教程文档](./lessons/2.4.6-rag-evaluation.md)

## RAG核心架构

```
┌─────────────────────────────────────────────────────┐
│                  RAG系统架构                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────┐      ┌─────────────┐              │
│  │  文档输入    │ →    │  文档处理    │              │
│  └─────────────┘      │  解析+分块   │              │
│                       └──────┬──────┘              │
│                              │                      │
│                       ┌──────↓──────┐              │
│                       │   Embedding  │              │
│                       │   向量化     │              │
│                       └──────┬──────┘              │
│                              │                      │
│  ┌─────────────┐      ┌──────↓──────┐              │
│  │  用户查询    │ →    │  向量数据库   │ ← 索引      │
│  └─────────────┘      │    检索      │              │
│                       └──────┬──────┘              │
│                              │                      │
│                       ┌──────↓──────┐              │
│                       │  检索结果    │              │
│  ┌─────────────┐      │  相关文档    │              │
│  │   LLM       │ ←────┤             │              │
│  │  生成回答   │      └─────────────┘              │
│  └──────┬──────┘                                    │
│         │                                           │
│         ↓                                           │
│  ┌─────────────┐                                    │
│  │   最终回答   │                                    │
│  └─────────────┘                                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## 关键技术

### 文档分块

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,      # 每块大小
    chunk_overlap=50,    # 重叠大小
    length_function=len,
    separators=["\n\n", "\n", " ", ""]
)

chunks = splitter.split_text(document)
```

### 向量检索

```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

# 创建向量存储
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=OpenAIEmbeddings()
)

# 检索
results = vectorstore.similarity_search(query, k=5)
```

### RAG Pipeline

```python
from langchain.chains import RetrievalQA

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)

answer = qa_chain.run("什么是RAG？")
```

## 学习建议

- 理解每个组件的作用
- 动手实现简单的RAG系统
- 尝试不同的分块和检索策略
- 评估和优化系统效果

## 下一步

完成本模块后，继续学习：
- [模块2.5：Agent工具集成](../module-2.5-tool-integration/README.md)