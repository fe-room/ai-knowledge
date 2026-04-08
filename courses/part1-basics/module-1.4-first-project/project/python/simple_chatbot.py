"""
Simple Chatbot - 第一个Python AI程序
功能：多轮对话、流式输出

运行方式：
1. 创建虚拟环境：python -m venv venv
2. 激活虚拟环境：source venv/bin/activate
3. 安装依赖：pip install -r requirements.txt
4. 配置.env文件：复制.env.example为.env，填入API密钥
5. 运行：python simple_chatbot.py
"""

import os
from dotenv import load_dotenv
from openai import OpenAI

# 加载环境变量
load_dotenv()

# 初始化客户端
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

def chat_stream(prompt, messages):
    """
    流式对话函数

    Args:
        prompt: 用户输入
        messages: 消息历史

    Returns:
        AI回复内容
    """
    # 添加用户消息
    messages.append({"role": "user", "content": prompt})

    # 调用API（流式）
    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        stream=True,
        temperature=0.7
    )

    # 流式输出
    print("\nAI: ", end="", flush=True)
    full_response = ""

    for chunk in stream:
        if chunk.choices[0].delta.content:
            content = chunk.choices[0].delta.content
            print(content, end="", flush=True)
            full_response += content

    print()  # 换行

    # 添加AI回复到历史
    messages.append({"role": "assistant", "content": full_response})

    return full_response

def main():
    """主函数"""
    print("=" * 50)
    print("  Simple Chatbot - 你的第一个AI聊天机器人")
    print("=" * 50)
    print("输入消息开始对话，输入 '退出' 或 'quit' 结束\n")

    # 消息历史
    messages = [
        {"role": "system", "content": "你是一个友好、有帮助的AI助手。"}
    ]

    while True:
        try:
            # 获取用户输入
            user_input = input("你: ").strip()

            # 检查退出命令
            if user_input.lower() in ["退出", "quit", "exit", "bye"]:
                print("\n再见！感谢使用！")
                break

            # 跳过空输入
            if not user_input:
                continue

            # 调用聊天函数
            chat_stream(user_input, messages)

        except KeyboardInterrupt:
            print("\n\n检测到中断，再见！")
            break
        except Exception as e:
            print(f"\n发生错误: {e}")
            continue

if __name__ == "__main__":
    main()