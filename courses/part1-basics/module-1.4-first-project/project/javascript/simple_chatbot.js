/**
 * Simple Chatbot - 第一个JavaScript AI程序
 * 功能：多轮对话、流式输出
 *
 * 运行方式：
 * 1. 安装依赖：npm install
 * 2. 配置.env文件：复制.env.example为.env，填入API密钥
 * 3. 运行：npm start 或 node simple_chatbot.js
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';
import readline from 'readline';

// 加载环境变量
dotenv.config();

// 初始化客户端
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 创建命令行接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 消息历史
const messages = [
  { role: 'system', content: '你是一个友好、有帮助的AI助手。' }
];

/**
 * 流式对话函数
 * @param {string} prompt - 用户输入
 * @returns {Promise<string>} AI回复内容
 */
async function chatStream(prompt) {
  // 添加用户消息
  messages.push({ role: 'user', content: prompt });

  // 调用API（流式）
  const stream = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
    stream: true,
    temperature: 0.7
  });

  // 流式输出
  process.stdout.write('\nAI: ');
  let fullResponse = '';

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    if (content) {
      process.stdout.write(content);
      fullResponse += content;
    }
  }

  console.log(); // 换行

  // 添加AI回复到历史
  messages.push({ role: 'assistant', content: fullResponse });

  return fullResponse;
}

/**
 * 主函数
 */
async function main() {
  console.log('='.repeat(50));
  console.log('  Simple Chatbot - 你的第一个AI聊天机器人');
  console.log('='.repeat(50));
  console.log("输入消息开始对话，输入 '退出' 或 'quit' 结束\n");

  // 提示用户输入
  const promptUser = () => {
    rl.question('你: ', async (input) => {
      const userMessage = input.trim();

      // 检查退出命令
      if (['退出', 'quit', 'exit', 'bye'].includes(userMessage.toLowerCase())) {
        console.log('\n再见！感谢使用！');
        rl.close();
        return;
      }

      // 跳过空输入
      if (!userMessage) {
        promptUser();
        return;
      }

      try {
        // 调用聊天函数
        await chatStream(userMessage);
      } catch (error) {
        console.error(`\n发生错误: ${error.message}`);
      }

      // 继续提示
      promptUser();
    });
  };

  // 开始对话
  promptUser();
}

// 启动程序
main().catch(console.error);