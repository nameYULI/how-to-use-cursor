'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const modes = [
  {
    name: 'Chat 模式',
    description: '通过自然语言对话，让 AI 理解你的需求并生成代码',
    icon: '💬',
    example: `// Chat 模式示例
User: 帮我写一个 React 倒计时组件
AI: 好的，这是一个简单的倒计时组件：

function CountDown({ seconds }) {
  const [time, setTime] = useState(seconds);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t > 0 ? t - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{time}s</div>;
}`,
  },
  {
    name: 'Ask 模式',
    description: '针对特定问题或需求，快速获取 AI 的建议和代码示例',
    icon: '❓',
    example: `// Ask 模式示例
Q: 如何优化这个函数的性能？
function slowFunction(data) {
  return data.filter(x => x > 0)
           .map(x => x * 2)
           .reduce((a, b) => a + b, 0);
}

A: 这是优化后的版本：
function optimizedFunction(data) {
  return data.reduce((sum, x) => 
    x > 0 ? sum + (x * 2) : sum, 0);
}`,
  },
  {
    name: 'Agent 模式',
    description: '让 AI 作为你的编程助手，自动完成复杂的编码任务',
    icon: '🤖',
    example: `// Agent 模式示例
Task: 创建一个用户认证系统
Steps:
1. 设计数据模型
2. 实现注册接口
3. 实现登录接口
4. 添加 JWT 认证
5. 集成错误处理

Agent: 正在生成代码...
// 自动生成完整的认证系统代码`,
  },
];

export default function GeneratePage() {
  const [activeMode, setActiveMode] = useState(0);
  const mode = modes[activeMode];

  return (
    <div className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation
        prevPage='/understand'
        nextPage='/rules'
      />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            高效代码生成
          </h1>
          <p className='text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            三种模式，满足不同场景的代码生成需求
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {modes.map((m, index) => (
            <button
              key={m.name}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                index === activeMode
                  ? 'bg-primary text-white scale-110'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              onClick={() => setActiveMode(index)}
            >
              {m.icon} {m.name}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='tech-card animate__animated animate__fadeInLeft'>
            <div className='text-4xl mb-4 floating'>{mode.icon}</div>
            <h3 className='text-2xl font-bold mb-4 gradient-text'>
              {mode.name}
            </h3>
            <p className='text-gray-300'>{mode.description}</p>
          </div>

          <div className='tech-card animate__animated animate__fadeInRight'>
            <h3 className='text-xl font-bold mb-4 text-primary'>代码示例</h3>
            <pre className='bg-black/30 p-6 rounded-lg overflow-x-auto'>
              <code className='text-sm font-mono text-gray-300'>
                {mode.example}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
