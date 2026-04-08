# 模块1.3：开发工具链

> 配置开发环境，掌握API调用和调试技巧

## 学习目标

完成本模块后，你将能够：
- 配置完整的AI开发环境
- 安全管理API密钥
- 调用OpenAI和Claude API
- 编写和运行单元测试

**课时安排**：4课时

## 知识点列表

### 1.3.1 开发环境配置（1.5课时）
- IDE选择与配置
- Python开发环境（虚拟环境、pip）
- Node.js开发环境（npm/yarn）
- API密钥安全管理

**学习资源**：
- [教程文档](./lessons/1.3.1-development-env.md)
- [Python示例](./examples/python/)
- [JavaScript示例](./examples/javascript/)

### 1.3.2 API调用基础（1.5课时）
- API调用流程
- OpenAI API基础调用
- Claude API基础调用
- API计费理解
- 错误处理

**学习资源**：
- [教程文档](./lessons/1.3.2-api-calling-basics.md)
- [Python示例](./examples/python/)
- [JavaScript示例](./examples/javascript/)

### 1.3.3 调试与测试基础（1课时）
- 单元测试概念
- pytest基础
- Jest基础
- 调试技巧
- 日志记录

**学习资源**：
- [教程文档](./lessons/1.3.3-debugging-testing.md)

## 重点强调

**API密钥安全是重中之重**：
- ❌ 绝不要在代码中硬编码API密钥
- ✅ 使用.env文件管理密钥
- ✅ 将.env添加到.gitignore
- ✅ 定期轮换密钥

## 学习建议

**实践为本**：
- 每个知识点都有配套代码示例
- 动手运行每个示例
- 尝试修改参数观察效果
- 完成练习题巩固知识

## 下一步

完成本模块后，继续学习：
- [模块1.4：第一个AI程序](../module-1.4-first-project/README.md)