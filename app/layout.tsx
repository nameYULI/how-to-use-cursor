// 'use client';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cursor 使用技巧与最佳实践',
  description: '让 AI 成为你的智能开发拍档',
};

interface StarsBgStyle extends React.CSSProperties {
  '--x': string;
  '--y': string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='stars-container'>
          <div
            className='stars-bg'
            style={{ '--x': '100', '--y': '100' } as StarsBgStyle}
          ></div>
          <div
            className='stars-bg'
            style={{ '--x': '200', '--y': '200' } as StarsBgStyle}
          ></div>
          <div
            className='stars-bg'
            style={{ '--x': '300', '--y': '300' } as StarsBgStyle}
          ></div>
        </div>
        {children}
      </body>
    </html>
  );
}
