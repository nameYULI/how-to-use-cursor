'use client';
import React from 'react';
import Navigation from '../components/Navigation';

const advancedFeatures = [
  {
    title: '高级代码生成',
    description: '掌握 AI 辅助代码生成的高级技巧',
    icon: '🚀',
    details: ['自定义代码模板', '智能代码补全', '测试用例生成', '文档自动生成'],
  },
  {
    title: '深度代码分析',
    description: '深入理解代码结构和性能特征',
    icon: '🔬',
    details: ['性能分析工具', '代码复杂度分析', '内存使用分析', '并发问题检测'],
  },
  {
    title: '自动化工作流',
    description: '构建高效的开发工作流程',
    icon: '⚙️',
    details: ['自动化测试流程', 'CI/CD 集成', '代码审查自动化', '发布流程优化'],
  },
];

const codeExample = `// 示例：高级功能使用
class AdvancedCursorFeatures {
  // 1. 自定义代码生成模板
  static async generateCustomCode() {
    const template = await cursor.loadTemplate('custom');
    return cursor.generate(template, {
      model: 'advanced',
      context: true
    });
  }

  // 2. 深度代码分析
  static async analyzeCodebase() {
    const analysis = await cursor.analyze({
      performance: true,
      complexity: true,
      memory: true
    });
    return analysis.insights;
  }

  // 3. 自动化工作流
  static async setupWorkflow() {
    await cursor.automate([
      'test',
      'review',
      'deploy'
    ]);
  }
}`;

export default function AdvancedPage() {
  return (
    <div className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation
        prevPage='/solutions'
        nextPage={undefined}
      />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            进阶开发指南
          </h1>
          <p className='text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            探索 Cursor 的高级特性，掌握 AI 辅助开发的精髓
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {advancedFeatures.map((feature, index) => (
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
            高级功能示例
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
