# JavaScript聊天机器人项目

这是一个简单的AI聊天机器人项目，使用OpenAI API实现多轮对话。

## 功能特点

- ✅ 多轮对话
- ✅ 流式输出（打字机效果）
- ✅ 优雅退出

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置API密钥

```bash
# 复制配置模板
cp .env.example .env

# 编辑.env文件，填入你的OpenAI API密钥
# OPENAI_API_KEY=sk-your-actual-api-key
```

### 3. 运行程序

```bash
npm start
# 或
node simple_chatbot.js
```

## 使用说明

- 输入消息开始对话
- 输入 `退出`、`quit`、`exit` 或 `bye` 结束程序
- 按 `Ctrl+C` 强制退出

## 项目结构

```
javascript/
├── simple_chatbot.js    # 主程序
├── package.json         # 项目配置
├── .env.example        # 环境变量模板
├── .env                # 实际环境变量（需自己创建）
└── README.md           # 本文件
```

## 获取API密钥

1. 访问 [OpenAI Platform](https://platform.openai.com)
2. 注册/登录账号
3. 进入 API Keys 页面
4. 点击 "Create new secret key"
5. 保存密钥（只显示一次）

## 常见问题

**Q: 提示 "Cannot use import statement"**
A: 确保package.json中有 `"type": "module"`

**Q: 提示 "OPENAI_API_KEY is not defined"**
A: 检查.env文件是否存在且内容正确

**Q: 响应很慢**
A: GPT-3.5通常在几秒内响应，如果很慢可能是网络问题

## 下一步

完成这个入门项目后，你可以：
- 尝试修改system prompt改变AI行为
- 添加对话历史保存功能
- 实现更复杂的功能（如工具调用）
- 学习 [第二部分：核心篇](../../../../part2-core/README.md)