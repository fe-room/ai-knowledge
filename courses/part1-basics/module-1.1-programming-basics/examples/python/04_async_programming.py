"""
04_async_programming.py
Python异步编程示例（重点）
异步编程是AI应用开发的核心技能
"""

import asyncio
import time

# 1. 同步 vs 异步对比
print("=" * 60)
print("1. 同步 vs 异步对比")
print("=" * 60)

# 同步执行示例
def sync_task(name, delay):
    """同步任务"""
    print(f"[同步] 开始 {name}")
    time.sleep(delay)  # 阻塞等待
    print(f"[同步] 完成 {name}")
    return f"{name}的结果"

print("\n--- 同步执行 ---")
start = time.time()
result1 = sync_task("任务1", 1)
result2 = sync_task("任务2", 1)
end = time.time()
print(f"同步总耗时: {end - start:.2f}秒")  # 总共2秒
print(f"结果: {result1}, {result2}")

# 异步执行示例
async def async_task(name, delay):
    """异步任务"""
    print(f"[异步] 开始 {name}")
    await asyncio.sleep(delay)  # 非阻塞等待
    print(f"[异步] 完成 {name}")
    return f"{name}的结果"

async def run_async_comparison():
    print("\n--- 异步执行 ---")
    start = time.time()
    # 并发执行两个任务
    results = await asyncio.gather(
        async_task("任务A", 1),
        async_task("任务B", 1)
    )
    end = time.time()
    print(f"异步总耗时: {end - start:.2f}秒")  # 总共1秒
    print(f"结果: {results}")

asyncio.run(run_async_comparison())

# 2. async/await基础
print("\n" + "=" * 60)
print("2. async/await基础语法")
print("=" * 60)

async def simple_async_function():
    """简单的异步函数"""
    print("开始执行异步函数")
    await asyncio.sleep(0.5)  # 模拟异步操作
    print("异步函数执行完成")
    return "异步结果"

async def main_simple():
    # 使用await调用异步函数
    result = await simple_async_function()
    print(f"获得结果: {result}")

asyncio.run(main_simple())

# 3. 并发执行多个任务
print("\n" + "=" * 60)
print("3. 并发执行多个任务 (asyncio.gather)")
print("=" * 60)

async def fetch_data(url, delay):
    """模拟获取数据"""
    print(f"  开始获取 {url} (预计{delay}秒)")
    await asyncio.sleep(delay)
    print(f"  ✓ 完成 {url}")
    return f"{url}的数据"

async def main_concurrent():
    print("并发执行3个数据获取任务:")

    # 使用gather并发执行
    results = await asyncio.gather(
        fetch_data("API-1", 1),
        fetch_data("API-2", 2),
        fetch_data("API-3", 0.5)
    )

    print(f"\n所有任务完成，结果:")
    for i, result in enumerate(results):
        print(f"  {i+1}: {result}")

asyncio.run(main_concurrent())

# 4. 任务创建和管理
print("\n" + "=" * 60)
print("4. 任务创建和管理 (asyncio.create_task)")
print("=" * 60)

async def background_task(name, duration):
    """后台任务"""
    print(f"[后台] {name} 开始运行")
    for i in range(3):
        await asyncio.sleep(duration)
        print(f"[后台] {name} 进度: {i+1}/3")
    print(f"[后台] {name} 完成")
    return f"{name} 结果"

async def main_with_tasks():
    print("创建后台任务并执行其他操作:")

    # 创建后台任务（不等待立即返回）
    task1 = asyncio.create_task(background_task("任务X", 0.5))
    task2 = asyncio.create_task(background_task("任务Y", 0.7))

    print("后台任务已创建，继续执行其他操作...")
    await asyncio.sleep(1)
    print("其他操作完成")

    # 等待后台任务完成
    results = await asyncio.gather(task1, task2)
    print(f"后台任务结果: {results}")

asyncio.run(main_with_tasks())

# 5. 异步超时和错误处理
print("\n" + "=" * 60)
print("5. 异步超时和错误处理")
print("=" * 60)

async def slow_task():
    """慢任务"""
    print("慢任务开始...")
    await asyncio.sleep(3)
    print("慢任务完成")
    return "慢任务结果"

async def failing_task():
    """会失败的任务"""
    print("开始执行可能失败的任务")
    await asyncio.sleep(0.5)
    raise ValueError("任务执行失败")

async def main_error_handling():
    # 超时处理
    print("--- 超时处理 ---")
    try:
        # 设置2秒超时
        result = await asyncio.wait_for(slow_task(), timeout=2.0)
        print(f"结果: {result}")
    except asyncio.TimeoutError:
        print("⚠ 任务超时，已取消")

    # 错误处理
    print("\n--- 错误处理 ---")
    try:
        result = await failing_task()
    except ValueError as e:
        print(f"⚠ 捕获错误: {e}")

    # gather的错误处理（return_exceptions=True）
    print("\n--- gather错误收集 ---")
    results = await asyncio.gather(
        async_task("正常任务", 0.5),
        failing_task(),
        async_task("另一个正常任务", 0.5),
        return_exceptions=True  # 返回异常对象而不是抛出
    )

    for i, result in enumerate(results):
        if isinstance(result, Exception):
            print(f"  任务{i+1}: 错误 - {result}")
        else:
            print(f"  任务{i+1}: 成功 - {result}")

asyncio.run(main_error_handling())

# 6. 模拟实际API调用
print("\n" + "=" * 60)
print("6. 模拟实际AI API调用场景")
print("=" * 60)

async def call_llm_api(prompt, model="gpt-3.5-turbo"):
    """模拟调用LLM API"""
    print(f"  → 调用 {model} API: {prompt[:20]}...")
    # 模拟API响应延迟
    delay = 0.5 + (len(prompt) % 3) * 0.2
    await asyncio.sleep(delay)
    response = f"API响应: 对'{prompt}'的回答"
    print(f"  ← API响应完成")
    return response

async def process_multiple_prompts():
    """并发处理多个提示"""
    prompts = [
        "什么是人工智能?",
        "解释机器学习的基本概念",
        "深度学习与传统机器学习的区别",
        "自然语言处理的应用场景",
        "如何开发AI Agent?"
    ]

    print(f"开始并发处理 {len(prompts)} 个提示...")

    start = time.time()

    # 并发调用API
    tasks = [call_llm_api(prompt) for prompt in prompts]
    results = await asyncio.gather(*tasks)

    end = time.time()

    print(f"\n所有API调用完成!")
    print(f"总耗时: {end - start:.2f}秒")
    print(f"平均每个API耗时: {(end - start) / len(prompts):.2f}秒")

asyncio.run(process_multiple_prompts())

# 7. 异步生成器（流式响应模拟）
print("\n" + "=" * 60)
print("7. 异步生成器（模拟流式响应）")
print("=" * 60)

async def stream_response(prompt):
    """模拟流式API响应"""
    print(f"开始流式响应: {prompt}")

    # 模拟分块返回内容
    chunks = ["这是", "一个", "流式", "响应", "的", "示例", "..."]

    for chunk in chunks:
        await asyncio.sleep(0.1)  # 模拟延迟
        yield chunk  # 异步生成器

async def consume_stream():
    """消费流式响应"""
    prompt = "请生成一段文本"

    print(f"消费流式响应:")
    full_response = ""

    # 异步迭代生成器
    async for chunk in stream_response(prompt):
        print(chunk, end="", flush=True)
        full_response += chunk

    print(f"\n完整响应: {full_response}")

asyncio.run(consume_stream())

# 8. 实用异步工具函数
print("\n" + "=" * 60)
print("8. 实用异步工具函数")
print("=" * 60)

async def batch_process(items, process_func, batch_size=3):
    """批量处理工具"""
    print(f"开始批量处理 {len(items)} 个项目，批次大小: {batch_size}")

    results = []
    for i in range(0, len(items), batch_size):
        batch = items[i:i+batch_size]
        print(f"\n处理批次 {i//batch_size + 1}: {batch}")
        batch_results = await asyncio.gather(
            *[process_func(item) for item in batch]
        )
        results.extend(batch_results)

    return results

async def process_item(item):
    """处理单个项目"""
    await asyncio.sleep(0.3)
    return f"处理完成: {item}"

async def main_batch():
    items = ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6", "数据7"]
    results = await batch_process(items, process_item, batch_size=3)
    print(f"\n所有结果: {results}")

asyncio.run(main_batch())

print("\n" + "=" * 60)
print("异步编程示例完成!")
print("掌握async/await是开发AI Agent的关键技能")
print("=" * 60)