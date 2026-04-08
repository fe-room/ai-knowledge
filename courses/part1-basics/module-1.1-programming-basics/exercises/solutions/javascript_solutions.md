# JavaScript练习答案

## 第一部分：ES6+语法

### 题目1答案

```javascript
const user = {
  name: "Alice",
  age: 25,
  address: {
    city: "Beijing",
    country: "China"
  },
  skills: ["JavaScript", "Python", "AI"]
};

// 1. 提取 name 和 age
const { name, age } = user;
console.log(name, age);  // Alice 25

// 2. 提取 city 并重命名
const { address: { city: userCity } } = user;
console.log(userCity);  // Beijing

// 3. 提取 skills 数组的前两个元素
const [skill1, skill2] = user.skills;
console.log(skill1, skill2);  // JavaScript Python
```

---

### 题目2答案

```javascript
const products = [
  { name: "Apple", price: 10, category: "fruit" },
  { name: "Banana", price: 5, category: "fruit" },
  { name: "Carrot", price: 3, category: "vegetable" },
  { name: "Orange", price: 8, category: "fruit" }
];

// 1. 过滤出所有水果
const fruits = products.filter(p => p.category === "fruit");
console.log(fruits);

// 2. 计算所有水果的总价
const totalPrice = fruits.reduce((sum, p) => sum + p.price, 0);
console.log(`水果总价: ${totalPrice}`);

// 3. 创建新数组，格式为 "水果名: 价格"
const formatted = fruits.map(p => `${p.name}: ${p.price}`);
console.log(formatted);
```

---

### 题目3答案

```javascript
// 1. 合并两个数组
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);  // [1, 2, 3, 4, 5, 6]

// 2. 复制对象并添加新属性
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "Beijing" };
console.log(updatedPerson);

// 3. 可变参数求和
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4, 5));  // 15
```

---

## 第二部分：Promise和异步

### 题目4答案

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 使用
delay(1000).then(() => console.log("1秒后执行"));

// 或使用async/await
async function example() {
  console.log("开始");
  await delay(1000);
  console.log("1秒后执行");
}
```

---

### 题目5答案

```javascript
// 模拟API调用
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUser(id) {
  console.log(`获取用户 ${id}...`);
  await delay(1000);  // 模拟延迟

  return {
    id,
    name: `User${id}`,
    email: `user${id}@example.com`
  };
}

// 获取单个用户
async function getSingleUser() {
  const user = await fetchUser(1);
  console.log("用户信息:", user);
}

// 并发获取多个用户
async function getMultipleUsers() {
  const users = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);

  console.log("所有用户:", users);
}

getSingleUser();
// 等待后执行多个
setTimeout(() => getMultipleUsers(), 2000);
```

---

### 题目6答案

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`尝试 ${attempt}/${maxRetries}: ${url}`);

      // 模拟API调用
      await delay(500);

      // 模拟随机失败
      if (Math.random() < 0.5 && attempt < maxRetries) {
        throw new Error("模拟的API错误");
      }

      console.log("✓ 请求成功");
      return { success: true, data: "响应数据" };

    } catch (error) {
      console.log(`✗ 失败: ${error.message}`);

      if (attempt < maxRetries) {
        console.log("等待1秒后重试...");
        await delay(1000);
      } else {
        throw error;
      }
    }
  }
}

// 使用
async function test() {
  try {
    const result = await fetchWithRetry("https://api.example.com/data");
    console.log("最终结果:", result);
  } catch (error) {
    console.error("所有重试失败:", error.message);
  }
}

test();
```

---

## 第三部分：TypeScript基础

### 题目7答案

```typescript
// 1. User接口
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. 函数类型
type FetchFunction = (url: string) => Promise<User>;

// 3. 联合类型
type Status = "pending" | "success" | "error";

// 使用示例
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

let currentStatus: Status = "pending";
currentStatus = "success";
```

---

### 题目8答案

```typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// 测试
console.log(firstElement([1, 2, 3]));        // 1
console.log(firstElement(["a", "b", "c"]));  // "a"
console.log(firstElement([]));               // undefined
```

---

## 第四部分：API调用

### 题目9答案

```javascript
// GET请求
async function getData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP错误: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("请求失败:", error.message);
    throw error;
  }
}

// POST请求
async function postData(url, payload) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP错误: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("请求失败:", error.message);
    throw error;
  }
}

// 带超时的请求
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error("请求超时");
    }
    throw error;
  }
}
```

---

### 题目10答案

```javascript
class APIClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
    this.timeout = 5000;
  }

  setTimeout(ms) {
    this.timeout = ms;
  }

  async request(method, path, options = {}) {
    const url = `${this.baseURL}${path}`;

    const config = {
      method,
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };

    if (options.body) {
      config.body = JSON.stringify(options.body);
      config.headers["Content-Type"] = "application/json";
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    config.signal = controller.signal;

    try {
      const response = await fetch(url, config);
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async get(path, options = {}) {
    return this.request("GET", path, options);
  }

  async post(path, body, options = {}) {
    return this.request("POST", path, { ...options, body });
  }

  async put(path, body, options = {}) {
    return this.request("PUT", path, { ...options, body });
  }

  async delete(path, options = {}) {
    return this.request("DELETE", path, options);
  }
}

// 使用示例
async function example() {
  const client = new APIClient("https://jsonplaceholder.typicode.com", {
    "User-Agent": "MyApp/1.0"
  });

  // GET请求
  const posts = await client.get("/posts");

  // POST请求
  const newPost = await client.post("/posts", {
    title: "Test",
    body: "Content",
    userId: 1
  });

  console.log(posts, newPost);
}

example();
```