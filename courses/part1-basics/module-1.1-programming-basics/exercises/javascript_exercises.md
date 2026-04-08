# JavaScript练习题

完成以下练习，巩固JavaScript基础知识。建议独立完成后再查看答案。

## 第一部分：ES6+语法（3题）

### 题目1：解构赋值

给定对象：
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
```

使用解构赋值：
1. 提取 name 和 age
2. 提取 city 并重命名为 userCity
3. 提取 skills 数组的前两个元素

---

### 题目2：箭头函数和数组方法

给定数组：
```javascript
const products = [
  { name: "Apple", price: 10, category: "fruit" },
  { name: "Banana", price: 5, category: "fruit" },
  { name: "Carrot", price: 3, category: "vegetable" },
  { name: "Orange", price: 8, category: "fruit" }
];
```

使用箭头函数和数组方法：
1. 过滤出所有水果
2. 计算所有水果的总价
3. 创建一个新数组，只包含水果名称，格式为 "水果名: 价格"

---

### 题目3：扩展运算符

使用扩展运算符完成：
1. 合并两个数组
2. 复制一个对象并添加新属性
3. 创建一个函数，接受任意数量的参数并求和

---

## 第二部分：Promise和异步（3题）- 重点

### 题目4：Promise基础

创建一个 Promise 函数 `delay(ms)`：
- 参数：延迟毫秒数
- 返回：Promise，在指定时间后 resolve

使用示例：
```javascript
delay(1000).then(() => console.log("1秒后执行"));
```

---

### 题目5：async/await

编写 async 函数 `fetchUser(id)`：
- 模拟API调用（使用delay）
- 返回用户对象

然后：
1. 获取单个用户
2. 并发获取多个用户

---

### 题目6：错误处理

编写一个带错误处理的异步函数：
- 模拟可能失败的API调用
- 使用 try-catch 捕获错误
- 实现重试机制（最多重试3次）

---

## 第三部分：TypeScript基础（2题）

### 题目7：接口和类型

定义以下类型：
1. User 接口（id, name, email）
2. 函数类型 FetchFunction（接受url，返回Promise<User>）
3. 联合类型 Status（"pending" | "success" | "error"）

---

### 题目8：泛型函数

编写一个泛型函数 `firstElement<T>`：
- 接受一个数组
- 返回数组的第一个元素
- 如果数组为空，返回 undefined

---

## 第四部分：API调用（2题）

### 题目9：Fetch API

使用 fetch API：
1. 发送GET请求获取数据
2. 发送POST请求创建数据
3. 处理错误和超时

---

### 题目10：封装API客户端

创建一个简单的API客户端类：
- 支持GET和POST方法
- 支持设置基础URL
- 支持设置请求头
- 支持超时设置

使用示例：
```javascript
const client = new APIClient("https://api.example.com", {
  "Authorization": "Bearer token"
});

const data = await client.get("/users/1");
```

---

## 提交答案

完成练习后，查看答案：
- [JavaScript练习答案](./solutions/javascript_solutions.md)