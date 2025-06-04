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

const codeExample = `// 示例：Cursor 进阶开发功能实战

// 1. 高级代码生成 - 复杂系统架构
class AdvancedCodeGeneration {
  static microserviceArchitecture() {
    // 任务：设计一个电商微服务架构
    // 询问 AI："设计一个包含用户、商品、订单、支付的微服务系统"
    
    // AI 会生成：
    // - 服务拆分方案
    // - API 网关配置
    // - 数据库设计
    // - 服务间通信方案
    // - Docker 容器化配置
    // - Kubernetes 部署文件
  }
  
  static complexAlgorithms() {
    // 生成复杂算法实现
    // "实现一个分布式缓存系统"
    // "创建一个实时推荐算法"
    // "设计一个高并发限流器"
    
    // 示例：分布式锁实现
    async function distributedLock(key, ttl = 30000) {
      const redis = getRedisClient();
      const lockKey = \`lock:\${key}\`;
      const lockValue = generateUniqueId();
      
      // 使用 SET 命令实现分布式锁
      const result = await redis.set(lockKey, lockValue, 'PX', ttl, 'NX');
      
      if (result === 'OK') {
        return {
          acquired: true,
          release: async () => {
            const script = \`
              if redis.call("GET", KEYS[1]) == ARGV[1] then
                return redis.call("DEL", KEYS[1])
              else
                return 0
              end
            \`;
            return await redis.eval(script, 1, lockKey, lockValue);
          }
        };
      }
      
      return { acquired: false };
    }
  }
}

// 2. 深度代码分析 - 系统级洞察
class DeepCodeAnalysis {
  static architectureAnalysis() {
    // 系统架构分析
    // "分析这个项目的架构模式"
    // "评估系统的可扩展性"
    // "找出架构中的单点故障"
    // "建议微服务拆分方案"
  }
  
  static securityAudit() {
    // 安全审计分析
    // "扫描项目中的安全漏洞"
    // "检查 SQL 注入风险"
    // "分析 XSS 攻击可能性"
    // "评估认证授权机制"
    // "检查敏感数据处理"
  }
  
  static dependencyAnalysis() {
    // 依赖关系深度分析
    // "分析项目的依赖风险"
    // "找出过时的依赖包"
    // "检查循环依赖问题"
    // "评估依赖包的安全性"
    // "建议依赖优化方案"
  }
  
  static performanceProfiler() {
    // 性能分析器
    // "分析代码的执行热点"
    // "找出内存泄漏源头"
    // "检测数据库查询性能"
    // "分析网络请求瓶颈"
    
    // 示例：性能监控装饰器
    function performanceMonitor(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      
      descriptor.value = async function(...args) {
        const start = performance.now();
        const memBefore = process.memoryUsage().heapUsed;
        
        try {
          const result = await originalMethod.apply(this, args);
          
          const end = performance.now();
          const memAfter = process.memoryUsage().heapUsed;
          
          console.log(\`\${propertyKey} 执行时间: \${(end - start).toFixed(2)}ms\`);
          console.log(\`内存使用: \${((memAfter - memBefore) / 1024 / 1024).toFixed(2)}MB\`);
          
          return result;
        } catch (error) {
          console.error(\`\${propertyKey} 执行失败:\`, error);
          throw error;
        }
      };
      
      return descriptor;
    }
  }
}

// 3. 自动化工作流 - 企业级 DevOps
class AutomatedWorkflow {
  static cicdPipeline() {
    // 完整 CI/CD 流水线生成
    // "创建 GitHub Actions 工作流"
    // "设置多环境部署策略"
    // "配置自动化测试流程"
    // "实现蓝绿部署方案"
    
    // 示例：GitHub Actions 配置
    const cicdConfig = \`
    name: Full Stack CI/CD Pipeline
    
    on:
      push:
        branches: [main, develop]
      pull_request:
        branches: [main]
    
    jobs:
      test:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            node-version: [18, 20]
            
        steps:
          - uses: actions/checkout@v3
          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: \${{ matrix.node-version }}
              cache: 'npm'
              
          - name: Install dependencies
            run: npm ci
            
          - name: Run linting
            run: npm run lint
            
          - name: Run unit tests
            run: npm run test:unit
            
          - name: Run integration tests
            run: npm run test:integration
            
          - name: Build application
            run: npm run build
            
          - name: Security audit
            run: npm audit --audit-level high
    \`;
  }
  
  static monitoringAndAlerting() {
    // 监控告警系统
    // "设置应用性能监控"
    // "配置错误跟踪系统"
    // "创建业务指标仪表板"
    // "设置智能告警规则"
    
    // 示例：自定义监控中间件
    function createMonitoringMiddleware(options = {}) {
      return (req, res, next) => {
        const startTime = Date.now();
        
        res.on('finish', () => {
          const duration = Date.now() - startTime;
          const metrics = {
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            duration,
            userAgent: req.get('User-Agent'),
            ip: req.ip,
            timestamp: new Date().toISOString()
          };
          
          // 发送到监控系统
          sendToMonitoring(metrics);
          
          // 如果响应时间过长，发送告警
          if (duration > 5000) {
            sendAlert(\`Slow response detected: \${req.url} took \${duration}ms\`);
          }
        });
        
        next();
      };
    }
  }
  
  static codeQualityGates() {
    // 代码质量门禁
    // "设置代码覆盖率要求"
    // "配置代码复杂度检查"
    // "实现自动化代码审查"
    // "设置质量评分标准"
    
    // 示例：质量检查脚本
    async function qualityCheck() {
      const results = await Promise.all([
        runTestCoverage(),
        checkCodeComplexity(),
        runSecurityScan(),
        validateDocumentation()
      ]);
      
      const qualityScore = calculateQualityScore(results);
      
      if (qualityScore < 80) {
        throw new Error(\`代码质量不达标: \${qualityScore}/100\`);
      }
      
      return qualityScore;
    }
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
