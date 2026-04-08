/**
 * 04_async_programming.js
 * JavaScript异步编程示例（重点）
 * 异步编程是AI应用开发的核心技能
 */

// 1. Callback（传统方式）
console.log("=" .repeat(60));
console.log("1. Callback（传统方式 - 不推荐）");
console.log("=" .repeat(60));

function fetchDataCallback(callback) {
  console.log("开始获取数据（Callback方式）");
  setTimeout(() => {
    const data = "数据结果";
    callback(data);
  }, 1000);
}

fetchDataCallback((data) => {
  console.log(`Callback收到数据: ${data}`);
});

// Callback地狱示例（不推荐）
console.log("\nCallback地狱示例:");
setTimeout(() => {
  console.log("第一步");
  setTimeout(() => {
    console.log("第二步");
    setTimeout(() => {
      console.log("第三步");
      console.log("Callback地狱难以维护!");
    }, 500);
  }, 500);
}, 500);

// 2. Promise基础
console.log("\n" + "=" .repeat(60));
console.log("2. Promise基础");
console.log("=" .repeat(60));

// 创建Promise
const basicPromise = new Promise((resolve, reject) => {
  console.log("Promise开始执行");
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Promise成功!");
    } else {
      reject("Promise失败!");
    }
  }, 1000);
});

// 使用Promise
basicPromise
  .then(result => {
    console.log(`✓ then: ${result}`);
    return result + " 处理后";
  })
  .then(processed => {
    console.log(`✓ 链式then: ${processed}`);
  })
  .catch(error => {
    console.error(`✗ catch: ${error}`);
  })
  .finally(() => {
    console.log("✓ finally: Promise完成");
  });

// 3. async/await（推荐）
console.log("\n" + "=" .repeat(60));
console.log("3. async/await（推荐方式）");
console.log("=" .repeat(60));

// async函数
async function asyncFetchData() {
  console.log("async函数开始");

  // await等待Promise完成
  const data = await new Promise(resolve => {
    setTimeout(() => resolve("async数据"), 1000);
  });

  console.log(`await获得数据: ${data}`);
  return data;
}

// 调用async函数
asyncFetchData()
  .then(result => console.log(`async函数返回: ${result}`));

// 4. 同步vs异步对比
console.log("\n" + "=" .repeat(60));
console.log("4. 同步vs异步对比（性能差异）");
console.log("=" .repeat(60));

// 同步执行（模拟）
function syncTask(name, duration) {
  console.log(`[同步] 开始 ${name}`);
  // 注意: setTimeout是异步的，这里只是概念演示
  // 实际同步阻塞会使用while循环或其他方式
  return `${name}结果`;
}

console.log("--- 同步执行模拟 ---");
console.log("两个任务顺序执行，总耗时约2秒");
console.log(syncTask("任务1", 1000));
console.log(syncTask("任务2", 1000));

// 异步执行（真实并发）
async function asyncTask(name, duration) {
  console.log(`[异步] 开始 ${name}`);
  await new Promise(resolve => setTimeout(resolve, duration));
  console.log(`[异步] 完成 ${name}`);
  return `${name}结果`;
}

async function runConcurrent() {
  console.log("\n--- 异步并发执行 ---");
  console.log("两个任务并发执行，总耗时约1秒");

  const start = Date.now();

  // Promise.all并发执行
  const results = await Promise.all([
    asyncTask("任务A", 1000),
    asyncTask("任务B", 1000)
  ]);

  const end = Date.now();
  console.log(`异步总耗时: ${end - start}ms（应该是约1000ms）`);
  console.log(`结果: ${results}`);
}

// 等待之前的Promise完成后执行
setTimeout(() => {
  runConcurrent();
}, 2500);

// 5. Promise.all和并发控制
console.log("\n" + "=" .repeat(60));
console.log("5. Promise.all和并发控制");
console.log("=" .repeat(60));

async function fetchAPI(url, delay) {
  console.log(`  → 请求 ${url}`);
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(`  ← 完成 ${url}`);
  return `${url}的数据`;
}

async function demonstratePromiseAll() {
  console.log("并发请求3个API:");

  const start = Date.now();

  // Promise.all - 所有成功才返回
  const results = await Promise.all([
    fetchAPI("API-1", 500),
    fetchAPI("API-2", 800),
    fetchAPI("API-3", 300)
  ]);

  const end = Date.now();
  console.log(`\n总耗时: ${end - start}ms（应该是约800ms，取决于最慢的）`);
  console.log(`结果: ${results}`);
}

setTimeout(() => {
  demonstratePromiseAll();
}, 4500);

// 6. 错误处理
console.log("\n" + "=" .repeat(60));
console.log("6. 错误处理");
console.log("=" .repeat(60));

async function failingTask() {
  console.log("执行可能失败的任务");
  await new Promise(resolve => setTimeout(resolve, 500));
  throw new Error("任务失败!");
}

async function handleError() {
  console.log("\n--- 错误处理示例 ---");

  // try-catch捕获错误
  try {
    const result = await failingTask();
    console.log(result);
  } catch (error) {
    console.error(`✗ 捕获错误: ${error.message}`);
  }

  // Promise.allSettled - 获取所有结果（包括失败）
  console.log("\n--- Promise.allSettled示例 ---");
  const settled = await Promise.allSettled([
    fetchAPI("成功API", 300),
    failingTask(),
    fetchAPI("另一个成功API", 300)
  ]);

  settled.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`  任务${i + 1}: 成功 - ${result.value}`);
    } else {
      console.log(`  任务${i + 1}: 失败 - ${result.reason.message}`);
    }
  });
}

setTimeout(() => {
  handleError();
}, 6000);

// 7. 实际应用：模拟AI API调用
console.log("\n" + "=" .repeat(60));
console.log("7. 实际应用：模拟AI API调用");
console.log("=" .repeat(60));

async function mockAICall(prompt, model = "gpt-3.5-turbo") {
  console.log(`  → 调用 ${model}: ${prompt.substring(0, 20)}...`);

  // 模拟API延迟
  const delay = 500 + Math.random() * 500;
  await new Promise(resolve => setTimeout(resolve, delay));

  // 模拟响应
  const response = {
    model: model,
    prompt: prompt,
    response: `对"${prompt}"的AI回复`,
    tokens: {
      prompt: Math.floor(prompt.length / 4),
      completion: 50,
      total: Math.floor(prompt.length / 4) + 50
    }
  };

  console.log(`  ← API响应完成`);
  return response;
}

async function batchAICall() {
  console.log("\n--- 批量调用AI API ---");

  const prompts = [
    "什么是人工智能?",
    "解释机器学习",
    "深度学习简介",
    "自然语言处理应用"
  ];

  const start = Date.now();

  // 并发调用所有API
  const tasks = prompts.map(prompt => mockAICall(prompt));
  const results = await Promise.all(tasks);

  const end = Date.now();

  console.log("\n所有API调用完成!");
  console.log(`总耗时: ${end - start}ms`);
  console.log(`平均每个API耗时: ${(end - start) / prompts.length}ms`);

  // 显示结果摘要
  console.log("\n结果摘要:");
  results.forEach((r, i) => {
    console.log(`  ${i + 1}. ${r.model} - Token使用: ${r.tokens.total}`);
  });
}

setTimeout(() => {
  batchAICall();
}, 8000);

// 8. 流式响应模拟
console.log("\n" + "=" .repeat(60));
console.log("8. 流式响应模拟（Streaming）");
console.log("=" .repeat(60));

async function streamAIResponse(prompt) {
  console.log(`开始流式响应: ${prompt}`);

  // 模拟分块返回
  const chunks = ["这是", "一个", "流式", "响应", "的", "示例"];

  let fullResponse = "";
  for (const chunk of chunks) {
    // 模拟每个块的延迟
    await new Promise(resolve => setTimeout(resolve, 100));

    // 输出每个块
    process.stdout.write(chunk);
    fullResponse += chunk;
  }

  console.log("\n");  // 换行
  return fullResponse;
}

async function testStream() {
  console.log("\n--- 流式响应测试 ---");
  const result = await streamAIResponse("请生成一段文本");
  console.log(`完整响应: ${result}`);
}

setTimeout(() => {
  testStream();
}, 10000);

// 9. 实用工具函数
console.log("\n" + "=" .repeat(60));
console.log("9. 实用工具函数");
console.log("=" .repeat(60));

// 批处理工具
async function batchProcess(items, processFunc, batchSize = 3) {
  console.log(`批处理 ${items.length} 个项目，批次大小: ${batchSize}`);

  const results = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    console.log(`处理批次 ${Math.floor(i / batchSize) + 1}: ${batch}`);

    const batchResults = await Promise.all(
      batch.map(item => processFunc(item))
    );

    results.push(...batchResults);
  }

  return results;
}

async function processItem(item) {
  await new Promise(resolve => setTimeout(resolve, 200));
  return `处理完成: ${item}`;
}

async function testBatchProcess() {
  console.log("\n--- 批处理工具测试 ---");
  const items = ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6", "数据7"];
  const results = await batchProcess(items, processItem, 3);
  console.log(`\n所有结果: ${results}`);
}

setTimeout(() => {
  testBatchProcess();
  console.log("\n" + "=" .repeat(60));
  console.log("异步编程示例完成!");
  console.log("掌握async/await是开发AI Agent的关键技能");
  console.log("=" .repeat(60));
}, 12000);