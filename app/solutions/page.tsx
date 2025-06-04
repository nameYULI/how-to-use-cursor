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

const codeExample = `// 示例：Cursor 痛点解决方案实战

// 1. 代码理解难题解决方案
class CodeUnderstandingSolutions {
  static quickProjectAnalysis() {
    // 问题：新加入项目，如何快速理解复杂代码库？
    // 解决方案：
    
    // Step 1: 启用项目结构分析
    // Settings > Cursor Features > Include Project Structure
    
    // Step 2: 系统性分析
    // 在 Chat 中询问：
    // "分析这个项目的整体架构"
    // "列出项目的主要功能模块"
    // "解释项目的技术栈选择"
    // "找出项目的核心业务逻辑"
  }
  
  static legacyCodeAnalysis() {
    // 问题：遗留代码难以理解，修改风险高
    // 解决方案：
    
    // 选中复杂函数，询问：
    // "这个函数的作用是什么？"
    // "分析这段代码的执行流程"
    // "找出这段代码的依赖关系"
    // "解释这里的设计模式"
    // "如何安全地重构这段代码？"
  }
  
  static businessLogicMapping() {
    // 问题：业务逻辑散布在多个文件中，难以追踪
    // 解决方案：
    
    // 使用语义搜索 (Cmd+Shift+F)：
    // "用户注册流程"
    // "订单处理逻辑"
    // "支付相关代码"
    // 然后询问："梳理这个业务流程的完整链路"
  }
}

// 2. 重构优化难题解决方案
class RefactoringOptimizationSolutions {
  static safeRefactoring() {
    // 问题：重构代码时担心引入 bug
    // 解决方案：
    
    // Step 1: 生成测试用例
    // 选中要重构的代码，询问：
    // "为这段代码生成完整的单元测试"
    
    // Step 2: 渐进式重构建议
    // "这段代码如何安全地重构？"
    // "提供分步骤的重构方案"
    // "重构过程中需要注意什么？"
    
    // Step 3: 代码审查
    // 重构后询问：
    // "审查重构后的代码质量"
    // "检查是否有遗漏的边界情况"
  }
  
  static performanceOptimization() {
    // 问题：性能瓶颈定位和优化困难
    // 解决方案：
    
    // 性能分析提问：
    // "分析这段代码的性能瓶颈"
    // "如何优化这个数据库查询？"
    // "这个算法的时间复杂度如何优化？"
    // "内存使用上有什么优化建议？"
    
    // React 组件优化：
    // "这个组件有什么渲染性能问题？"
    // "如何减少不必要的重新渲染？"
    // "状态管理可以如何优化？"
  }
  
  static codeSmellDetection() {
    // 问题：代码异味检测和修复
    // 解决方案：
    
    // 选中代码，询问：
    // "检查这段代码是否存在代码异味"
    // "这里违反了哪些设计原则？"
    // "如何应用 SOLID 原则改进代码？"
    // "建议更好的设计模式"
  }
}

// 3. 团队协作难题解决方案
class TeamCollaborationSolutions {
  static codeReviewAssistance() {
    // 问题：代码审查耗时且容易遗漏问题
    // 解决方案：
    
    // PR 审查助手：
    // "审查这个 PR 的代码质量"
    // "检查是否遵循团队编码规范"
    // "找出潜在的安全问题"
    // "评估代码的可维护性"
    // "生成 PR 审查评论"
  }
  
  static knowledgeSharing() {
    // 问题：团队知识传递困难
    // 解决方案：
    
    // 自动文档生成：
    // "为这个模块生成技术文档"
    // "创建新人上手指南"
    // "生成 API 使用说明"
    // "写一份架构决策记录(ADR)"
  }
  
  static standardsEnforcement() {
    // 问题：团队编码规范执行不一致
    // 解决方案：
    
    // 使用 .cursor/rules 系统：
    // 1. 创建团队规则文件
    // 2. 定义编码标准
    // 3. 自动检查规范遵守情况
    // 4. 生成规范化建议
    
    // 询问 AI：
    // "根据团队规范审查这段代码"
    // "这段代码是否符合最佳实践？"
    // "如何改进代码的一致性？"
  }
  
  static conflictResolution() {
    // 问题：代码冲突解决复杂
    // 解决方案：
    
    // Git 冲突分析：
    // "分析这个合并冲突的原因"
    // "建议最佳的冲突解决方案"
    // "如何避免类似冲突？"
    // "重构代码以减少冲突可能性"
  }
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
