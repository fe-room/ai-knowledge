"""
02_basic_syntax.py
Python基础语法示例
"""

# 1. 变量与数据类型
print("=" * 50)
print("1. 变量与数据类型")
print("=" * 50)

# 数字类型
integer_num = 42
float_num = 3.14159
complex_num = 2 + 3j

print(f"整数: {integer_num}, 类型: {type(integer_num)}")
print(f"浮点数: {float_num}, 类型: {type(float_num)}")
print(f"复数: {complex_num}, 类型: {type(complex_num)}")

# 字符串
single_quote = 'Hello'
double_quote = "World"
f_string = f"{single_quote} {double_quote}"

print(f"字符串拼接: {f_string}")
print(f"字符串长度: {len(f_string)}")

# 布尔值
is_true = True
is_false = False

print(f"布尔值: {is_true}, {is_false}")

# 2. 数据结构
print("\n" + "=" * 50)
print("2. 数据结构")
print("=" * 50)

# 列表
fruits = ["apple", "banana", "cherry", "date"]
print(f"原始列表: {fruits}")

fruits.append("elderberry")
print(f"添加后: {fruits}")

print(f"切片 [1:3]: {fruits[1:3]}")
print(f"最后两个: {fruits[-2:]}")

# 字典
person = {
    "name": "Alice",
    "age": 25,
    "city": "Beijing"
}
print(f"字典: {person}")
print(f"姓名: {person['name']}")
print(f"年龄: {person.get('age')}")

# 集合
colors = {"red", "green", "blue", "red"}  # 自动去重
print(f"集合（自动去重）: {colors}")

# 元组
coordinates = (10, 20)
print(f"元组: {coordinates}")
x, y = coordinates  # 解包
print(f"解包: x={x}, y={y}")

# 3. 运算符
print("\n" + "=" * 50)
print("3. 运算符")
print("=" * 50)

a, b = 10, 3

print(f"a + b = {a + b}")  # 加法
print(f"a - b = {a - b}")  # 减法
print(f"a * b = {a * b}")  # 乘法
print(f"a / b = {a / b}")  # 除法
print(f"a // b = {a // b}")  # 整除
print(f"a % b = {a % b}")  # 取模
print(f"a ** b = {a ** b}")  # 幂运算

# 比较运算
print(f"a > b: {a > b}")
print(f"a == b: {a == b}")

# 4. 控制流
print("\n" + "=" * 50)
print("4. 控制流")
print("=" * 50)

# if语句
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print(f"分数 {score}, 等级: {grade}")

# for循环
print("遍历列表:")
for i, fruit in enumerate(fruits[:3]):
    print(f"  {i}: {fruit}")

# while循环
print("\n计数循环:")
count = 0
while count < 3:
    print(f"  计数: {count}")
    count += 1

# 5. 字符串操作
print("\n" + "=" * 50)
print("5. 字符串操作")
print("=" * 50)

text = "Hello, Python World"

print(f"原文: {text}")
print(f"小写: {text.lower()}")
print(f"大写: {text.upper()}")
print(f"标题: {text.title()}")
print(f"替换: {text.replace('Python', 'AI')}")
print(f"分割: {text.split(',')}")

# 6. 列表推导式
print("\n" + "=" * 50)
print("6. 列表推导式")
print("=" * 50)

numbers = [1, 2, 3, 4, 5]

# 基本推导式
squares = [x ** 2 for x in numbers]
print(f"平方: {squares}")

# 条件推导式
evens = [x for x in numbers if x % 2 == 0]
print(f"偶数: {evens}")

# 字典推导式
squared_dict = {x: x ** 2 for x in numbers}
print(f"平方字典: {squared_dict}")

print("\n示例完成!")