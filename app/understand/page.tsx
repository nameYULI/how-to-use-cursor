'use client';
import React from 'react';
import Navigation from '../components/Navigation';

const features = [
  {
    title: '项目结构分析',
    description: '自动识别项目结构，快速定位关键文件和模块',
    icon: '🗂️',
    details: [
      '启用 Include Project Structure 功能',
      '自动扫描项目目录结构',
      '识别核心文件和依赖关系',
      '生成项目结构图谱',
    ],
  },
  {
    title: '代码智能导航',
    description: '通过 AI 理解代码上下文，快速定位相关代码',
    icon: '🔍',
    details: [
      '智能代码搜索和跳转',
      '上下文相关推荐',
      '代码关系可视化',
      '智能代码补全',
    ],
  },
  {
    title: '文档智能集成',
    description: '自动关联官方文档、社区资源和内部知识库',
    icon: '📚',
    details: [
      '@Docs 官方文档集成',
      '@Web 实时网络搜索',
      'MCP 内部知识连接',
      '智能文档推荐',
    ],
  },
];

const codeExample = `// 示例：Cursor 智能代码理解实战
// 1. 项目结构分析 - 快速了解项目架构
function exploreProject() {
  // 在 Settings > Cursor Features 中启用 Include Project Structure
  // 然后在 Chat 中询问：
  // "分析这个项目的架构和主要模块"
  // "解释这个组件的作用和依赖关系"
}

// 2. 智能代码导航 - 快速定位相关代码
function smartNavigation() {
  // 使用 Cmd+K 打开文件搜索
  // 使用 Cmd+Shift+F 进行语义搜索：
  // "用户认证相关的代码"
  // "处理支付的函数"
  // "React 状态管理"
}

// 3. 文档智能集成 - 获取最新技术资料
function useDocumentation() {
  // 在 Chat 中使用特殊前缀：
  // @Docs 查询官方文档：@Docs Next.js routing
  // @Web 搜索最新信息：@Web React 18 新特性
  // 直接询问："这个 API 的最佳使用方式是什么？"
}

// 4. 上下文理解 - AI 分析代码关系
function contextAnalysis() {
  // 选中代码块，然后在 Chat 中询问：
  // "这段代码的作用是什么？"
  // "如何优化这个函数的性能？"
  // "这里有什么潜在的 bug？"
}`;

export default function UnderstandPage() {
  return (
    <div className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation
        prevPage='/'
        nextPage='/generate'
      />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            智能代码理解
          </h1>
          <p className='text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            让 AI 成为你的代码解读专家
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className='tech-card animate__animated animate__fadeInUp'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className='text-4xl mb-4 floating'>{feature.icon}</div>
              <h3 className='text-2xl font-bold mb-4 gradient-text'>
                {feature.title}
              </h3>
              <p className='text-gray-400 mb-6'>{feature.description}</p>
              <ul className='space-y-2'>
                {feature.details.map((detail, i) => (
                  <li
                    key={i}
                    className='flex items-center text-sm text-gray-300'
                  >
                    <span className='mr-2 text-primary'>•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='tech-card mt-16 animate__animated animate__fadeIn animate__delay-1s'>
          <h3 className='text-2xl font-bold mb-6 gradient-text'>
            代码分析示例
          </h3>
          <pre className='bg-black/30 p-6 rounded-lg overflow-x-auto'>
            <code className='text-sm font-mono text-gray-300'>
              {codeExample}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
