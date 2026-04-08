# Python练习答案

## 第一部分：基础语法

### 题目1答案

```python
# 创建变量
person_info = {
    "name": "Alice",
    "age": 25,
    "height": 1.68,
    "is_student": True
}

# 打印信息
print(f"姓名: {person_info['name']}")
print(f"年龄: {person_info['age']}")
print(f"身高: {person_info['height']}")
print(f"是否是学生: {person_info['is_student']}")
```

---

### 题目2答案

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 1. 只包含偶数
evens = [x for x in numbers if x % 2 == 0]
print(f"偶数列表: {evens}")

# 2. 每个元素平方
squared = [x ** 2 for x in numbers]
print(f"平方列表: {squared}")

# 3. 计算和
total = sum(numbers)
print(f"总和: {total}")
```

---

### 题目3答案

```python
# 创建学生字典
students = {
    "Alice": {"age": 20, "scores": [85, 90, 88]},
    "Bob": {"age": 21, "scores": [78, 82, 80]},
    "Charlie": {"age": 22, "scores": [92, 88, 95]}
}

# 打印平均成绩
averages = {}
for name, info in students.items():
    avg = sum(info["scores"]) / len(info["scores"])
    averages[name] = avg
    print(f"{name}的平均成绩: {avg:.2f}")

# 找出最高分
best_student = max(averages, key=averages.get)
print(f"\n成绩最高的学生: {best_student}, 平均分: {averages[best_student]:.2f}")
```

---

## 第二部分：控制流

### 题目4答案

```python
def get_grade(score):
    """根据分数返回等级"""
    if not isinstance(score, (int, float)):
        return "无效输入"

    if score < 0 or score > 100:
        return "分数应在0-100之间"

    if score >= 90:
        return "优秀"
    elif score >= 80:
        return "良好"
    elif score >= 70:
        return "中等"
    elif score >= 60:
        return "及格"
    else:
        return "不及格"

# 测试
test_scores = [95, 85, 75, 65, 55, -5, 105, "abc"]
for score in test_scores:
    print(f"分数 {score}: {get_grade(score)}")
```

---

### 题目5答案

```python
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}x{i}={j*i}", end="  ")
    print()  # 换行
```

---

## 第三部分：函数和类

### 题目6答案

```python
def calculate_bmi(weight, height):
    """计算BMI并返回健康状态"""
    if height <= 0:
        return None, "身高必须大于0"

    bmi = weight / (height ** 2)

    if bmi < 18.5:
        status = "偏瘦"
    elif bmi < 25:
        status = "正常"
    elif bmi < 30:
        status = "偏胖"
    else:
        status = "肥胖"

    return round(bmi, 2), status

# 测试
bmi, status = calculate_bmi(70, 1.75)
print(f"BMI: {bmi}, 健康状态: {status}")
```

---

### 题目7答案

```python
class BankAccount:
    """银行账户类"""

    def __init__(self, name, balance=0):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        """存款"""
        if amount > 0:
            self.balance += amount
            return True
        return False

    def withdraw(self, amount):
        """取款"""
        if amount > 0 and self.balance >= amount:
            self.balance -= amount
            return True
        return False

    def get_balance(self):
        """查询余额"""
        return self.balance

# 测试
account = BankAccount("Alice", 1000)
account.deposit(500)
account.withdraw(200)
print(f"余额: {account.get_balance()}")  # 1300
```

---

### 题目8答案

```python
import time
from functools import wraps

def timer(func):
    """计时装饰器"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"函数 {func.__name__} 执行耗时: {end - start:.2f}秒")
        return result
    return wrapper

# 测试
@timer
def slow_function():
    time.sleep(1)
    return "完成"

result = slow_function()
```

---

## 第四部分：异步编程（重点）

### 题目9答案

```python
import asyncio

async def fetch_user(user_id):
    """模拟获取用户信息"""
    print(f"获取用户 {user_id}...")
    await asyncio.sleep(1)  # 模拟API延迟

    # 返回模拟的用户数据
    return {
        "id": user_id,
        "name": f"User{user_id}",
        "email": f"user{user_id}@example.com"
    }

async def main():
    # 并发获取3个用户
    users = await asyncio.gather(
        fetch_user(1),
        fetch_user(2),
        fetch_user(3)
    )

    print("\n所有用户信息:")
    for user in users:
        print(user)

asyncio.run(main())
```

---

### 题目10答案

```python
import asyncio

async def batch_process(items, process_func, batch_size=3):
    """批量处理函数，支持并发控制"""
    results = []

    for i in range(0, len(items), batch_size):
        batch = items[i:i + batch_size]
        print(f"处理批次 {i // batch_size + 1}: {batch}")

        # 并发处理当前批次
        batch_results = await asyncio.gather(
            *[process_func(item) for item in batch]
        )

        results.extend(batch_results)

    return results

# 测试
async def process_item(item):
    """处理单个项目的示例函数"""
    await asyncio.sleep(0.5)
    return f"处理完成: {item}"

async def main():
    items = ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6", "数据7"]
    results = await batch_process(items, process_item, batch_size=3)
    print(f"\n所有结果: {results}")

asyncio.run(main())
```