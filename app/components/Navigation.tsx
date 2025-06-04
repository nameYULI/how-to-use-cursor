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
      {/* 左侧导航按钮 */}
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
          >
            ←
          </Link>
        ) : (
          <span>←</span>
        )}
      </div>

      {/* 右侧导航按钮 */}
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
          >
            →
          </Link>
        ) : (
          <span>→</span>
        )}
      </div>
    </>
  );
}
