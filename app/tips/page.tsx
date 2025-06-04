'use client';
import React from 'react';
import Navigation from '../components/Navigation';

const tipFeatures = [
  {
    title: '代码分析技巧',
    description: '快速理解和分析复杂代码结构',
    icon: '🔍',
    details: ['语义代码搜索', '代码结构可视化', '依赖关系分析', '性能瓶颈检测'],
  },
  {
    title: '效率提升技巧',
    description: '掌握提升开发效率的关键技巧',
    icon: '⚡',
    details: ['快捷键优化', '代码片段管理', '自动化工作流', '智能代码补全'],
  },
  {
    title: '最佳实践技巧',
    description: '遵循业界认可的最佳开发实践',
    icon: '💡',
    details: [
      '代码审查技巧',
      '测试策略优化',
      '文档生成技巧',
      '版本控制最佳实践',
    ],
  },
];

const codeExample = `// 示例：开发技巧应用
class DevelopmentTips {
  // 1. 代码分析
  static analyzeCode() {
    cursor.semanticSearch("pattern");
    cursor.visualizeDependencies();
    cursor.detectBottlenecks();
  }

  // 2. 效率提升
  static boostEfficiency() {
    cursor.customizeShortcuts();
    cursor.manageSnippets();
    cursor.automateWorkflow();
  }

  // 3. 最佳实践
  static applyBestPractices() {
    cursor.reviewCode();
    cursor.optimizeTests();
    cursor.generateDocs();
  }
}`;

export default function TipsPage() {
  return (
    <div className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation
        prevPage='/rules'
        nextPage='/solutions'
      />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            实用开发技巧
          </h1>
          <p className='text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            掌握 Cursor 开发技巧，提升开发效率和代码质量
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {tipFeatures.map((feature, index) => (
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
            开发技巧示例
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
