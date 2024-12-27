import React from 'react';
import Chat from '../components/Chat';

const News = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">新闻页</h1>
      {/* 这里可以添加新闻内容 */}
      <div className="mt-8">
        <Chat />
      </div>
    </div>
  );
};

export default News;