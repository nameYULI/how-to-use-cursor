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

const codeExample = `// 示例：Cursor 开发技巧实战指南

// 1. 高效代码分析技巧
class CodeAnalysisTips {
  static semanticSearch() {
    // Cmd+Shift+F 语义搜索示例：
    // "处理用户认证的代码"
    // "包含支付逻辑的文件" 
    // "React hooks 相关代码"
    // "处理文件上传的函数"
  }
  
  static visualizeDependencies() {
    // 在 Chat 中询问：
    // "分析这个文件的依赖关系"
    // "找出循环依赖问题"
    // "显示模块之间的调用关系"
  }
  
  static performanceAnalysis() {
    // 选中代码块后询问：
    // "这段代码有什么性能问题？"
    // "如何优化这个算法的时间复杂度？"
    // "找出内存泄漏的潜在风险"
  }
}

// 2. 效率提升技巧
class EfficiencyTips {
  static keyboardShortcuts() {
    // 必备快捷键：
    // Cmd+K: 快速文件搜索
    // Cmd+Shift+P: 命令面板
    // Cmd+L: 选择整行并与 AI 对话
    // Cmd+I: 行内 AI 编辑
    // Ctrl+Shift+L: 选择所有匹配项
  }
  
  static codeSnippets() {
    // 创建自定义代码片段：
    // 1. Cmd+Shift+P -> "Preferences: Configure User Snippets"
    // 2. 选择语言 (如 typescript.json)
    // 3. 添加常用模板
  }
  
  static automatedWorkflow() {
    // 设置自动化任务：
    // 1. 在 .vscode/tasks.json 中配置任务
    // 2. 使用 Cursor 生成构建脚本
    // 3. 配置 Git hooks 进行代码质量检查
  }
}

// 3. 最佳实践技巧  
class BestPractices {
  static codeReview() {
    // AI 辅助代码审查：
    // 1. 选中要审查的代码
    // 2. 在 Chat 中询问：
    //    "审查这段代码的质量"
    //    "检查是否有安全漏洞"
    //    "建议改进的地方"
    //    "是否符合最佳实践"
  }
  
  static testOptimization() {
    // AI 生成测试用例：
    // "为这个函数生成单元测试"
    // "创建集成测试用例"
    // "生成边界条件测试"
    // "添加错误处理测试"
  }
  
  static documentationGeneration() {
    // AI 自动生成文档：
    // 选中函数/类，然后询问：
    // "为这个函数生成 JSDoc 注释"
    // "创建 API 文档"
    // "生成使用示例"
    // "写一份 README 文档"
  }
  
  static versionControl() {
    // Git 工作流优化：
    // 1. 使用 AI 生成有意义的提交信息
    // 2. 自动化代码格式化 (pre-commit hooks)
    // 3. AI 辅助 PR 描述生成
    // 4. 自动化 changelog 生成
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
