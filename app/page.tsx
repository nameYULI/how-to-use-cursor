'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';

const features = [
  {
    title: '智能代码理解',
    description:
      '让 AI 深度理解项目结构，快速掌握复杂代码库的核心架构和业务逻辑',
    path: '/understand',
    icon: '🧠',
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: '高效代码生成',
    description:
      '通过 Agent/Ask/Manual 三种模式，智能生成高质量代码，大幅提升开发效率',
    path: '/generate',
    icon: '⚡',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: '智能规则管理',
    description:
      '通过 .cursor/rules 系统化管理项目规范，确保团队代码质量和一致性',
    path: '/rules',
    icon: '📚',
    color: 'from-yellow-500 to-red-500',
  },
  {
    title: '实用开发技巧',
    description: '掌握语义搜索、依赖分析、性能优化等核心技巧，提升开发效率',
    path: '/tips',
    icon: '💡',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: '痛点解决方案',
    description: '针对代码理解、重构优化、团队协作等痛点，提供系统性解决方案',
    path: '/solutions',
    icon: '🎯',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: '进阶开发指南',
    description: '探索 AI 辅助开发的高级功能，掌握自动化工作流和深度代码分析',
    path: '/advanced',
    icon: '🚀',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Home() {
  return (
    <main className='min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative'>
      <Navigation nextPage='/understand' />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center space-y-8 mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold gradient-text animate__animated animate__fadeIn'>
            Cursor 使用技巧与最佳实践
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s'>
            让 AI 成为你的智能开发拍档，提升10倍开发效率
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Link
              href={feature.path}
              key={feature.path}
              className='group animate__animated animate__fadeInUp'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className='tech-card h-full group-hover:scale-105 transition-transform duration-300'>
                <div
                  className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} floating`}
                >
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-20 text-center space-y-8'>
          <p className='text-xl text-gray-400 animate__animated animate__fadeIn animate__delay-2s'>
            开启你的 AI 辅助开发之旅
          </p>
          <div className='flex justify-center gap-6 animate__animated animate__fadeIn animate__delay-2s'>
            <a
              href='https://cursor.sh'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-button bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              title='Cursor 官网'
            >
              🌐
            </a>
            <a
              href='https://github.com/getcursor/cursor'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              title='Cursor GitHub'
            >
              ⭐
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
