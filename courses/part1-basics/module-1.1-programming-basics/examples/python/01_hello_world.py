"""
01_hello_world.py
Python基础示例：Hello World
"""

# 基本的Hello World
print("Hello, World!")

# 使用f-string格式化
name = "Python Learner"
print(f"Hello, {name}!")

# 多行输出
print("""
欢迎学习Python！
这是一个简单但功能强大的编程语言。
""")

# 输出到文件
with open("hello.txt", "w") as f:
    f.write("Hello, World!\n")

print("内容已写入hello.txt文件")