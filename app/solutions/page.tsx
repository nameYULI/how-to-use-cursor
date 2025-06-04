'use client';
import React from 'react';
import Navigation from '../components/Navigation';

const solutionFeatures = [
  {
    title: '代码理解难题',
    description: '快速理解复杂代码库和业务逻辑',
    icon: '🧩',
    details: ['智能代码分析', '依赖关系图谱', '业务流程追踪', '代码结构解析'],
  },
  {
    title: '重构优化难题',
    description: '安全可靠的代码重构和性能优化',
    icon: '⚡',
    details: ['重构建议生成', '代码异味检测', '性能瓶颈分析', '重构方案验证'],
  },
  {
    title: '团队协作难题',
    description: '提升团队协作效率和代码质量',
    icon: '🤝',
    details: ['代码评审辅助', '知识共享平台', '团队规范执行', '冲突解决方案'],
  },
];

const codeExample = `// 示例：使用 Cursor 解决开发痛点
async function solveDevelopmentIssues() {
  // 1. 代码理解
  const codeInsights = await cursor.analyzeCode();
  
  // 2. 重构优化
  const refactoringPlan = await cursor.generateRefactoringPlan();
  
  // 3. 团队协作
  const reviewComments = await cursor.reviewCode();
  
  // 4. 应用解决方案
  await cursor.applySolutions({
    insights: codeInsights,
    plan: refactoringPlan,
    review: reviewComments
  });
}`;

export default function SolutionsPage() {
  return (
    <div className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation
        prevPage='/tips'
        nextPage='/advanced'
      />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            痛点解决方案
          </h1>
          <p className='text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            解决开发过程中的常见痛点，提供完整的解决方案
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {solutionFeatures.map((feature, index) => (
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
            解决方案示例
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
