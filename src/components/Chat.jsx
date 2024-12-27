import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'A', text: '你好，B！', time: '10:18' },
    { id: 2, user: 'B', text: '你好，A！', time: '10:19' },
    { id: 3, user: 'A', text: '你今天怎么样？', time: '10:20' },
    { id: 4, user: 'B', text: '我很好，谢谢！你呢？', time: '10:21' },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: 'B', // 假设当前用户是 A
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">聊天</div>
        <div className="h-64 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.user === 'A' ? 'justify-start' : 'justify-end'} mb-2`}>
              <div className={`bg-${message.user === 'A' ? 'blue' : 'green'}-500 text-white p-2 rounded-lg`}>
                <div>{message.text}</div>
                <div className="text-xs text-gray-200">{message.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="输入消息..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg">
          发送
        </button>
      </div>
    </div>
  );
};

export default Chat;