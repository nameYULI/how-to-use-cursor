'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const modes = [
  {
    name: 'Agent 模式',
    description:
      '通过 ⌘I 快捷键启动，让 AI 作为智能助手完成复杂的代码生成和编辑任务',
    icon: '🤖',
    example: `// Agent 模式实战示例 (⌘I)
// 任务：创建一个支持搜索和分页的用户列表组件

// 使用方式：
// 1. 按 ⌘I 启动 Agent 模式
// 2. 输入需求："创建一个React用户列表组件，支持搜索和分页功能"
// 3. Agent 会自动生成完整的组件代码

// Agent 生成的完整代码：
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentUsers = filteredUsers.slice(
    (page - 1) * itemsPerPage, 
    page * itemsPerPage
  );
  
  useEffect(() => {
    // 获取用户数据的逻辑
    fetchUsers();
  }, []);
  
  return (
    <div className="space-y-4">
      <input 
        type="text"
        placeholder="搜索用户..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />
      
      {loading ? (
        <div>加载中...</div>
      ) : (
        <>
          <div className="grid gap-4">
            {currentUsers.map(user => (
              <div key={user.id} className="p-4 border rounded-lg">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                className={\`px-3 py-1 rounded \${
                  page === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }\`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Agent 模式特点：
// ✅ 智能理解复杂需求
// ✅ 自动生成完整解决方案
// ✅ 支持多轮对话优化
// ✅ 可以处理大型代码重构`,
  },
  {
    name: 'Ask 模式',
    description: '针对具体技术问题，快速获取 AI 的专业建议和优化方案',
    icon: '❓',
    example: `// Ask 模式实战示例
// 使用方式：直接在编辑器中选中代码，然后使用 Ask 功能

// 问题：如何优化这个 React 组件的性能？

// 原始代码：
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`).then(res => res.json()).then(setUser);
    fetch(\`/api/users/\${userId}/posts\`).then(res => res.json()).then(setPosts);
  }, [userId]);
  
  return (
    <div>
      {user && <h1>{user.name}</h1>}
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}

// AI 优化建议：
function OptimizedUserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 1. 使用 useMemo 避免不必要的重渲染
  const memoizedPosts = useMemo(() => 
    posts.map(post => ({ ...post, excerpt: post.content.slice(0, 100) })), 
    [posts]
  );
  
  // 2. 使用 useCallback 优化事件处理
  const handleRefresh = useCallback(async () => {
    setLoading(true);
    try {
      // 3. 并行请求提升性能
      const [userRes, postsRes] = await Promise.all([
        fetch(\`/api/users/\${userId}\`),
        fetch(\`/api/users/\${userId}/posts\`)
      ]);
      
      const [userData, postsData] = await Promise.all([
        userRes.json(),
        postsRes.json()
      ]);
      
      setUser(userData);
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [userId]);
  
  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);
  
  // 4. 使用 React.memo 进行组件记忆化
  const PostItem = React.memo(({ post }) => (
    <div key={post.id}>{post.title}</div>
  ));
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {user && <h1>{user.name}</h1>}
      <button onClick={handleRefresh}>Refresh</button>
      {memoizedPosts.map(post => 
        <PostItem key={post.id} post={post} />
      )}
    </div>
  );
}

// Ask 模式特点：
// ✅ 快速问答式交互
// ✅ 专注于具体问题解决
// ✅ 提供专业技术建议
// ✅ 适合代码优化和调试`,
  },
  {
    name: 'Manual 模式',
    description: '传统的手动编辑模式，完全由开发者控制代码编写过程',
    icon: '✍️',
    example: `// Manual 模式实战示例
// 在这个模式下，你可以完全手动控制代码编写

// 使用场景：
// 1. 当你想要完全控制代码编写过程时
// 2. 进行精细的代码调整和优化
// 3. 学习和理解复杂的代码逻辑
// 4. 避免 AI 干扰的专注编程时间

class ManualCodingExample {
  constructor() {
    this.data = [];
    this.initialized = false;
  }
  
  // 手动编写的方法，完全由开发者控制
  async initialize() {
    try {
      this.data = await this.fetchData();
      this.initialized = true;
      console.log('Manual initialization completed');
    } catch (error) {
      console.error('Initialization failed:', error);
      throw error;
    }
  }
  
  // 传统的开发方式，依靠开发者的经验和技能
  processData(filter = null) {
    if (!this.initialized) {
      throw new Error('Please initialize first');
    }
    
    let result = this.data;
    
    if (filter) {
      result = result.filter(filter);
    }
    
    return result.map(item => ({
      ...item,
      processed: true,
      timestamp: Date.now()
    }));
  }
  
  private async fetchData() {
    // 手动实现数据获取逻辑
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  }
}

// Manual 模式特点：
// ✅ 完全的代码控制权
// ✅ 传统编程体验
// ✅ 适合学习和精细调整
// ✅ 无 AI 干扰的专注开发`,
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
            Agent、Ask、Manual 三种模式，满足不同场景的开发需求
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
