self.onmessage = function(event) {
  const workerId = event.data; // 接收任务标识
  console.log(`Worker ${workerId} 正在执行任务...`);

  // 模拟复杂计算任务，例如计算斐波那契数列
  const result = fibonacci(40);

  console.log(`Worker ${workerId} 完成任务.`);
  
  // 向主线程发送结果
  self.postMessage(result);
};

// 计算斐波那契数列
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
