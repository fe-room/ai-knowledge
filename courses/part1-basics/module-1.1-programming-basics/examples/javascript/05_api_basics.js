/**
 * 05_api_basics.js
 * JavaScript API调用基础示例
 * 演示如何使用Node.js进行HTTP API请求
 */

// 注意: 需要先安装node-fetch
// npm install node-fetch

// 或者使用内置的fetch（Node.js 18+）

// 1. 使用fetch API（Node.js 18+）
console.log("=" .repeat(60));
console.log("1. Fetch API基础（Node.js 18+）");
console.log("=" .repeat(60));

async function basicFetch(url) {
  console.log(`发起GET请求: ${url}`);

  try {
    const response = await fetch(url);

    console.log(`状态码: ${response.status}`);
    console.log(`状态文本: ${response.statusText}`);

    if (response.ok) {
      const data = await response.json();
      console.log("响应数据:", data);
      return data;
    } else {
      console.log(`请求失败: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`请求异常: ${error.message}`);
    return null;
  }
}

// 示例调用（延迟执行，避免干扰前面的示例）
setTimeout(async () => {
  const exampleUrl = "https://jsonplaceholder.typicode.com/posts/1";
  await basicFetch(exampleUrl);
}, 1000);

// 2. POST请求
console.log("\n" + "=" .repeat(60));
console.log("2. POST请求");
console.log("=" .repeat(60));

async function postRequest(url, data) {
  console.log(`发起POST请求: ${url}`);
  console.log("请求数据:", data);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    console.log(`状态码: ${response.status}`);

    if (response.ok) {
      const result = await response.json();
      console.log("响应数据:", result);
      return result;
    } else {
      console.log(`请求失败: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`请求异常: ${error.message}`);
    return null;
  }
}

setTimeout(async () => {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  const postData = {
    title: "AI应用开发教程",
    body: "JavaScript API调用示例",
    userId: 1
  };
  await postRequest(postUrl, postData);
}, 2000);

// 3. 请求头和认证
console.log("\n" + "=" .repeat(60));
console.log("3. 请求头和认证");
console.log("=" .repeat(60));

function showAuthExample(apiKey) {
  const headers = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "User-Agent": "AI-Course-Bot/1.0"
  };

  console.log(`认证请求配置（API Key: ${apiKey.substring(0, 10)}...）`);
  console.log("请求头:");
  for (const [key, value] of Object.entries(headers)) {
    if (key === "Authorization") {
      console.log(`  ${key}: ${value.substring(0, 20)}... (已隐藏)`);
    } else {
      console.log(`  ${key}: ${value}`);
    }
  }
}

showAuthExample("sk-example-api-key-12345");

// 4. 错误处理和重试
console.log("\n" + "=" .repeat(60));
console.log("4. 错误处理和重试机制");
console.log("=" .repeat(60));

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`尝试 ${attempt}/${maxRetries}: ${url}`);

    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(5000)  // 5秒超时
      });

      if (response.ok) {
        console.log("✓ 请求成功");
        return await response.json();
      }

      // 处理特定状态码
      if (response.status === 429) {
        console.log("⚠ API限流，等待5秒后重试...");
        await new Promise(resolve => setTimeout(resolve, 5000));
        continue;
      }

      if (response.status >= 500) {
        console.log(`⚠ 服务器错误 (${response.status})，重试...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }

      // 其他错误
      console.log(`✗ 请求失败: ${response.status}`);
      return null;

    } catch (error) {
      console.log(`⚠ 异常: ${error.message}`);

      if (attempt < maxRetries) {
        console.log("等待2秒后重试...");
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  console.log("✗ 达到最大重试次数，请求失败");
  return null;
}

setTimeout(async () => {
  await fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1");
}, 3000);

// 5. JSON数据处理
console.log("\n" + "=" .repeat(60));
console.log("5. JSON数据处理");
console.log("=" .repeat(60));

function demonstrateJSON() {
  // JSON字符串转对象
  const jsonString = '{"name": "Alice", "age": 25, "skills": ["JS", "Python"]}';

  console.log(`原始JSON字符串: ${jsonString}`);

  const parsed = JSON.parse(jsonString);
  console.log("解析后的对象:", parsed);

  // 对象转JSON字符串
  const obj = {
    name: "Bob",
    age: 30,
    projects: [
      { name: "AI Agent", status: "active" },
      { name: "Chatbot", status: "completed" }
    ]
  };

  console.log("\n原始对象:", obj);

  // 格式化JSON
  const formatted = JSON.stringify(obj, null, 2);
  console.log("转换为格式化JSON:");
  console.log(formatted);
}

demonstrateJSON();

// 6. 模拟AI API调用结构
console.log("\n" + "=" .repeat(60));
console.log("6. 模拟AI API调用结构");
console.log("=" .repeat(60));

function mockAIAPIStructure() {
  // API请求结构
  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "什么是人工智能?" }
    ],
    temperature: 0.7,
    max_tokens: 100
  };

  console.log("API请求结构:");
  console.log(JSON.stringify(requestBody, null, 2));

  // API响应结构
  const responseStructure = {
    id: "chatcmpl-123456",
    object: "chat.completion",
    created: 1234567890,
    model: "gpt-3.5-turbo",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: "这是AI的回复内容..."
        },
        finish_reason: "stop"
      }
    ],
    usage: {
      prompt_tokens: 10,
      completion_tokens: 20,
      total_tokens: 30
    }
  };

  console.log("\nAPI响应结构:");
  console.log(JSON.stringify(responseStructure, null, 2));
}

mockAIAPIStructure();

// 7. 实际OpenAI SDK使用示例（概念演示）
console.log("\n" + "=" .repeat(60));
console.log("7. OpenAI SDK使用示例（概念）");
console.log("=" .repeat(60));

function showOpenAIExample() {
  // 注意: 这是概念演示，实际使用需要安装openai包
  console.log("OpenAI SDK使用示例代码:");
  console.log(`
// 安装: npm install openai

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function chat() {
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Hello!' }
    ]
  });

  console.log(response.choices[0].message.content);
}

// 流式响应
async function streamChat() {
  const stream = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: '写一首诗' }],
    stream: true
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}
`);
}

showOpenAIExample();

// 8. Claude API示例（概念演示）
console.log("\n" + "=" .repeat(60));
console.log("8. Claude API示例（概念）");
console.log("=" .repeat(60));

function showClaudeExample() {
  console.log("Claude API使用示例代码:");
  console.log(`
// 安装: npm install @anthropic-ai/sdk

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

async function chat() {
  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'Hello, Claude!' }
    ]
  });

  console.log(message.content[0].text);
}

// 流式响应
async function streamChat() {
  const stream = client.messages.stream({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [{ role: 'user', content: '请写一首诗' }]
  });

  for await (const event of stream) {
    if (event.type === 'content_block_delta') {
      process.stdout.write(event.delta.text || '');
    }
  }
}
`);
}

showClaudeExample();

setTimeout(() => {
  console.log("\n" + "=" .repeat(60));
  console.log("API调用基础示例完成!");
  console.log("这些基础概念将在后续实际调用AI API时用到");
  console.log("=" .repeat(60));
}, 5000);