'use client';
import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  prevPage?: string;
  nextPage?: string;
}

export default function Navigation({ prevPage, nextPage }: NavigationProps) {
  return (
    <>
      {/* 桌面端左右导航按钮 */}
      <div
        className={`fixed left-8 top-1/2 -translate-y-1/2 nav-button hidden md:flex z-40 
        ${
          !prevPage
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:scale-110 transition-transform'
        }`}
      >
        {prevPage ? (
          <Link
            href={prevPage}
            className='w-full h-full flex items-center justify-center'
            title='上一页'
          >
            ←
          </Link>
        ) : (
          <span>←</span>
        )}
      </div>

      <div
        className={`fixed right-8 top-1/2 -translate-y-1/2 nav-button hidden md:flex z-40 
        ${
          !nextPage
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:scale-110 transition-transform'
        }`}
      >
        {nextPage ? (
          <Link
            href={nextPage}
            className='w-full h-full flex items-center justify-center'
            title='下一页'
          >
            →
          </Link>
        ) : (
          <span>→</span>
        )}
      </div>

      {/* 移动端底部导航栏 */}
      <div className='fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-40'>
        <div className='flex gap-4 bg-black/20 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3'>
          <div
            className={`${!prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {prevPage ? (
              <Link
                href={prevPage}
                className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-xl hover:bg-white/20 transition-colors'
                title='上一页'
              >
                ←
              </Link>
            ) : (
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-xl'>
                ←
              </div>
            )}
          </div>

          <Link
            href='/'
            className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-xl hover:bg-white/20 transition-colors'
            title='首页'
          >
            🏠
          </Link>

          <div
            className={`${!nextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {nextPage ? (
              <Link
                href={nextPage}
                className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-xl hover:bg-white/20 transition-colors'
                title='下一页'
              >
                →
              </Link>
            ) : (
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-xl'>
                →
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
