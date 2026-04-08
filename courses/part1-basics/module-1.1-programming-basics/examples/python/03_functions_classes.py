"""
03_functions_classes.py
Python函数与类示例
"""

# 1. 基本函数
print("=" * 50)
print("1. 基本函数")
print("=" * 50)

def greet(name):
    """简单的问候函数"""
    return f"Hello, {name}!"

print(greet("Alice"))
print(greet("Bob"))

# 2. 参数类型
print("\n" + "=" * 50)
print("2. 参数类型")
print("=" * 50)

# 默认参数
def greet_with_default(name="World"):
    return f"Hello, {name}!"

print(greet_with_default())
print(greet_with_default("Alice"))

# 可变参数
def sum_all(*numbers):
    """计算所有参数的和"""
    return sum(numbers)

print(f"sum_all(1, 2, 3): {sum_all(1, 2, 3)}")
print(f"sum_all(1, 2, 3, 4, 5): {sum_all(1, 2, 3, 4, 5)}")

# 关键字可变参数
def build_profile(**kwargs):
    """构建用户档案"""
    return kwargs

profile = build_profile(name="Alice", age=25, city="Beijing")
print(f"用户档案: {profile}")

# 3. 多返回值
print("\n" + "=" * 50)
print("3. 多返回值")
print("=" * 50)

def get_min_max(numbers):
    """返回最小值和最大值"""
    return min(numbers), max(numbers)

numbers = [3, 1, 4, 1, 5, 9, 2, 6]
min_val, max_val = get_min_max(numbers)
print(f"列表: {numbers}")
print(f"最小值: {min_val}, 最大值: {max_val}")

# 4. Lambda表达式
print("\n" + "=" * 50)
print("4. Lambda表达式")
print("=" * 50)

# 简单Lambda
square = lambda x: x ** 2
print(f"平方函数: square(5) = {square(5)}")

# 在map中使用
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(f"使用map: {squared}")

# 在filter中使用
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"使用filter: {evens}")

# 5. 类定义
print("\n" + "=" * 50)
print("5. 类定义")
print("=" * 50)

class Person:
    """人物类"""

    # 构造函数
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 实例方法
    def greet(self):
        return f"Hello, I'm {self.name}, {self.age} years old."

    # getter方法
    def get_age(self):
        return self.age

    # setter方法
    def set_age(self, new_age):
        if new_age > 0:
            self.age = new_age

# 创建对象
alice = Person("Alice", 25)
bob = Person("Bob", 30)

print(alice.greet())
print(bob.greet())

# 修改属性
alice.set_age(26)
print(f"Alice新年龄: {alice.get_age()}")

# 6. 继承
print("\n" + "=" * 50)
print("6. 继承")
print("=" * 50)

class Student(Person):
    """学生类，继承自Person"""

    def __init__(self, name, age, grade):
        # 调用父类构造函数
        super().__init__(name, age)
        self.grade = grade

    def study(self):
        return f"{self.name} is studying in grade {self.grade}"

    # 重写父类方法
    def greet(self):
        return f"Hi, I'm {self.name}, a student in grade {self.grade}."

student = Student("Charlie", 18, "A")
print(student.greet())
print(student.study())

# 7. 静态方法和类方法
print("\n" + "=" * 50)
print("7. 静态方法和类方法")
print("=" * 50)

class Calculator:
    """计算器类"""

    # 静态方法（不依赖实例）
    @staticmethod
    def add(a, b):
        return a + b

    # 类方法（依赖类）
    @classmethod
    def description(cls):
        return f"This is a {cls.__name__} class"

# 使用静态方法
print(f"Calculator.add(3, 5): {Calculator.add(3, 5)}")

# 使用类方法
print(Calculator.description())

# 8. 装饰器示例
print("\n" + "=" * 50)
print("8. 装饰器示例")
print("=" * 50)

def log_function(func):
    """函数日志装饰器"""
    def wrapper(*args, **kwargs):
        print(f"调用函数: {func.__name__}")
        print(f"参数: args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"返回值: {result}")
        return result
    return wrapper

@log_function
def multiply(a, b):
    return a * b

multiply(4, 5)

print("\n示例完成!")