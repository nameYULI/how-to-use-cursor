'use client';
import React from 'react';
import Navigation from '../components/Navigation';

const ruleFeatures = [
  {
    title: '结构化规则系统',
    description: '通过 .cursor/rules 目录，系统化管理项目规则',
    icon: '📁',
    details: [
      '项目级别规则配置',
      '目录级别规则继承',
      '文件级别规则覆盖',
      '规则优先级管理',
    ],
  },
  {
    title: '智能规则应用',
    description: '自动识别和应用相关规则，确保代码质量',
    icon: '🤖',
    details: ['代码风格规则', '架构设计规则', '命名规范规则', '测试覆盖规则'],
  },
  {
    title: '团队协作增强',
    description: '提升团队协作效率，统一开发标准',
    icon: '🤝',
    details: ['团队规则共享', '规则版本控制', '规则冲突解决', '规则更新推送'],
  },
];

const codeExample = `// 示例：.cursor/rules/README.mdc
#! rules

## 项目规则
- 使用 TypeScript 进行开发
- 遵循 ESLint 规范
- 必须编写单元测试

## 目录规则
- components/: 组件必须是函数组件
- utils/: 工具函数必须有注释
- api/: 必须处理错误情况

## 文件规则
- 导出必须显式声明类型
- 必须包含功能说明注释
- 复杂逻辑必须有说明`;

export default function RulesPage() {
  return (
    <div className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation
        prevPage='/generate'
        nextPage='/tips'
      />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            智能规则管理
          </h1>
          <p className='text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            结构化的规则系统，让团队协作更高效，代码质量更可控
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {ruleFeatures.map((feature, index) => (
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
          <h3 className='text-2xl font-bold mb-6 gradient-text'>规则示例</h3>
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
