# 模块3.4：部署与运维

> 将Agent系统部署到生产环境

## 学习目标

完成本模块后，你将能够：
- 开发生产级API服务
- 使用容器化部署
- 部署到云平台
- 实施生产运维

**课时安排**：8课时

## 核心概念

**部署架构**：

```
开发环境
    ↓
容器化
    ↓
┌─────────────────────────────┐
│        生产环境              │
├─────────────────────────────┤
│                             │
│  ┌─────────┐  ┌─────────┐   │
│  │ API网关 │  │ 负载均衡 │  │
│  └────┬────┘  └────┬────┘   │
│       │            │        │
│  ┌────↓────┐  ┌───↓─────┐   │
│  │Agent服务│  │Agent服务│   │
│  └────┬────┘  └────┬────┘   │
│       │            │        │
│  ┌────↓────────────↓────┐   │
│  │      监控系统        │   │
│  └──────────────────────┘   │
│                             │
└─────────────────────────────┘
```

## 知识点列表

### 3.4.1 API服务开发（2课时）⭐
- FastAPI/Flask服务
- Express/NestJS服务
- API最佳实践

**学习资源**：
- [教程文档](./lessons/3.4.1-api-development.md)

### 3.4.2 容器化部署（2课时）⭐
- Docker基础
- Docker Compose
- 容器化实践

**学习资源**：
- [教程文档](./lessons/3.4.2-containerization.md)

### 3.4.3 云平台部署（2课时）
- 云平台选择
- 云函数部署
- 实战部署

**学习资源**：
- [教程文档](./lessons/3.4.3-cloud-deployment.md)

### 3.4.4 生产运维（2课时）
- 性能监控
- 故障排查
- 安全加固

**学习资源**：
- [教程文档](./lessons/3.4.4-production-ops.md)

## 核心示例

### FastAPI服务

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    session_id: str = None

@app.post("/chat")
async def chat(request: ChatRequest):
    response = await agent.run(request.message)
    return {"response": response}
```

### Docker部署

```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - redis

  redis:
    image: redis:alpine
```

## 学习建议

- 先本地测试，再部署上线
- 实施完整的CI/CD流程
- 建立监控告警机制
- 制定故障恢复预案

## 下一步

完成本模块后，你已经掌握进阶篇所有内容！继续学习：
- [第四部分：实战项目篇](../../part4-projects/)