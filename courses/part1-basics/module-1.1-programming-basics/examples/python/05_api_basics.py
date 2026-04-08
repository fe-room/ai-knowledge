"""
05_api_basics.py
Python API调用基础示例
演示如何使用Python进行HTTP API请求
"""

import requests
import json
import asyncio
import aiohttp

# 1. 同步HTTP请求
print("=" * 60)
print("1. 同步HTTP请求 (requests库)")
print("=" * 60)

def sync_get_request(url):
    """同步GET请求示例"""
    print(f"发起GET请求: {url}")

    try:
        response = requests.get(url, timeout=5)

        # 检查状态码
        print(f"状态码: {response.status_code}")

        # 获取响应内容
        if response.status_code == 200:
            data = response.json()
            print(f"响应数据: {json.dumps(data, indent=2, ensure_ascii=False)}")
            return data
        else:
            print(f"请求失败: {response.text}")
            return None

    except requests.Timeout:
        print("请求超时")
        return None
    except requests.RequestException as e:
        print(f"请求异常: {e}")
        return None

# 示例API调用（使用公开API）
print("\n--- 示例1: 获取公开API数据 ---")
# 注意: 这里使用示例URL，实际运行时可能需要替换为真实的API
example_url = "https://jsonplaceholder.typicode.com/posts/1"
result = sync_get_request(example_url)

# 2. POST请求
print("\n" + "=" * 60)
print("2. POST请求示例")
print("=" * 60)

def sync_post_request(url, data):
    """同步POST请求示例"""
    print(f"发起POST请求: {url}")
    print(f"请求数据: {json.dumps(data, ensure_ascii=False)}")

    try:
        response = requests.post(
            url,
            json=data,  # 发送JSON数据
            headers={"Content-Type": "application/json"},
            timeout=5
        )

        print(f"状态码: {response.status_code}")

        if response.status_code in [200, 201]:
            return response.json()
        else:
            print(f"请求失败: {response.text}")
            return None

    except requests.RequestException as e:
        print(f"请求异常: {e}")
        return None

# 示例POST请求
print("\n--- 示例2: 创建新数据 ---")
post_data = {
    "title": "AI应用开发教程",
    "body": "这是一篇关于AI应用开发的教程",
    "userId": 1
}
post_url = "https://jsonplaceholder.typicode.com/posts"
post_result = sync_post_request(post_url, post_data)

# 3. 异步HTTP请求
print("\n" + "=" * 60)
print("3. 异步HTTP请求 (aiohttp库)")
print("=" * 60)

async def async_get_request(url):
    """异步GET请求"""
    print(f"  [异步] 请求: {url}")

    async with aiohttp.ClientSession() as session:
        try:
            async with session.get(url, timeout=5) as response:
                print(f"  [异步] 状态码: {response.status}")

                if response.status == 200:
                    data = await response.json()
                    return data
                else:
                    text = await response.text()
                    print(f"  [异步] 失败: {text}")
                    return None

        except asyncio.TimeoutError:
            print("  [异步] 超时")
            return None
        except Exception as e:
            print(f"  [异步] 异常: {e}")
            return None

async def async_multiple_requests():
    """并发多个异步请求"""
    urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3"
    ]

    print(f"并发请求 {len(urls)} 个URL...")

    # 并发执行
    tasks = [async_get_request(url) for url in urls]
    results = await asyncio.gather(*tasks)

    print(f"\n所有请求完成，获取到 {len([r for r in results if r])} 个结果")
    return results

asyncio.run(async_multiple_requests())

# 4. 处理请求头和认证
print("\n" + "=" * 60)
print("4. 请求头和认证")
print("=" * 60)

def authenticated_request(url, api_key):
    """带认证的请求示例"""
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "AI-Course-Bot/1.0"
    }

    print(f"发起认证请求，API Key: {api_key[:10]}...")

    # 注意: 这里是示例代码，实际使用时URL和Key需要替换
    # response = requests.get(url, headers=headers)

    print("请求头配置:")
    for key, value in headers.items():
        if key == "Authorization":
            print(f"  {key}: {value[:20]}... (已隐藏)")
        else:
            print(f"  {key}: {value}")

# 示例（使用假key演示）
authenticated_request("https://api.example.com/data", "sk-example-api-key-12345")

# 5. JSON数据处理
print("\n" + "=" * 60)
print("5. JSON数据处理")
print("=" * 60)

# 解析JSON字符串
json_string = '{"name": "Alice", "age": 25, "skills": ["Python", "AI"]}'

print(f"原始JSON字符串: {json_string}")

# 解析为Python对象
data = json.loads(json_string)
print(f"解析后的Python对象:")
print(f"  类型: {type(data)}")
print(f"  内容: {data}")

# Python对象转JSON
python_dict = {
    "name": "Bob",
    "age": 30,
    "projects": [
        {"name": "AI Agent", "status": "active"},
        {"name": "Chatbot", "status": "completed"}
    ]
}

print(f"\nPython字典: {python_dict}")

# 转换为JSON字符串（格式化）
json_formatted = json.dumps(python_dict, indent=2, ensure_ascii=False)
print(f"转换为JSON（格式化）:")
print(json_formatted)

# 6. 错误处理和重试
print("\n" + "=" * 60)
print("6. 错误处理和重试机制")
print("=" * 60)

def request_with_retry(url, max_retries=3):
    """带重试机制的请求"""
    for attempt in range(max_retries):
        print(f"尝试 {attempt + 1}/{max_retries}: {url}")

        try:
            response = requests.get(url, timeout=5)

            if response.status_code == 200:
                print("✓ 请求成功")
                return response.json()

            elif response.status_code == 429:
                # API限流，等待后重试
                print("⚠ API限流，等待5秒后重试...")
                time.sleep(5)
                continue

            elif response.status_code >= 500:
                # 服务器错误，重试
                print(f"⚠ 服务器错误 ({response.status_code})，重试...")
                time.sleep(2)
                continue

            else:
                # 其他错误，不重试
                print(f"✗ 请求失败: {response.status_code}")
                return None

        except requests.Timeout:
            print("⚠ 超时，等待后重试...")
            time.sleep(2)

        except requests.RequestException as e:
            print(f"✗ 请求异常: {e}")
            if attempt < max_retries - 1:
                time.sleep(2)
            else:
                return None

    print("✗ 达到最大重试次数，请求失败")
    return None

import time
result = request_with_retry("https://jsonplaceholder.typicode.com/posts/1")

# 7. 模拟AI API调用
print("\n" + "=" * 60)
print("7. 模拟AI API调用结构")
print("=" * 60)

def mock_ai_api_call(prompt, model="gpt-3.5-turbo"):
    """模拟AI API调用的结构（不实际调用）"""

    # API请求结构
    request_body = {
        "model": model,
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7,
        "max_tokens": 100
    }

    print("API请求结构:")
    print(json.dumps(request_body, indent=2))

    # 模拟响应结构
    mock_response = {
        "id": "chatcmpl-123456",
        "object": "chat.completion",
        "created": 1234567890,
        "model": model,
        "choices": [
            {
                "index": 0,
                "message": {
                    "role": "assistant",
                    "content": "这是AI的回复内容..."
                },
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 10,
            "completion_tokens": 20,
            "total_tokens": 30
        }
    }

    print("\nAPI响应结构:")
    print(json.dumps(mock_response, indent=2))

    return mock_response

# 示例调用
ai_result = mock_ai_api_call("什么是人工智能?", "gpt-3.5-turbo")

print("\n" + "=" * 60)
print("API调用基础示例完成!")
print("这些基础概念将在后续实际调用AI API时用到")
print("=" * 60)