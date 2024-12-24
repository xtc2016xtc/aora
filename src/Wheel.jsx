import { useState, useEffect } from 'react';

// 定义一周七天的秒杀活动时间段
const daysOfWeek = [
  { day: '星期一', startTime: '10:00', endTime: '11:00', isActive: true },
  { day: '星期二', startTime: '10:10', endTime: '17:00', isActive: true },
  { day: '星期三', startTime: '12:00', endTime: '13:00', isActive: true },
  { day: '星期四', startTime: '13:00', endTime: '14:00', isActive: true },
  { day: '星期五', startTime: '14:00', endTime: '15:00', isActive: true },
  { day: '星期六', startTime: '15:00', endTime: '16:00', isActive: true },
  { day: '星期天', startTime: '16:00', endTime: '17:00', isActive: true },
];

const Wheel = () => {
  // 秒杀活动时间段
  const [currentDay, setCurrentDay] = useState(null); // 当前秒杀活动的星期几
  const [isInProgress, setIsInProgress] = useState(false); // 秒杀活动是否进行中
  const [endTime, setEndTime] = useState(''); // 结束时间
  const [remainingTime, setRemainingTime] = useState(''); // 剩余时间



  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDayIndex = now.getDay() - 1; // getDay() 返回 0 表示星期天，1 表示星期一，以此类推
      const timeString = now.toTimeString().slice(0, 8); // 获取当前时间的小时、分钟和秒
      const today = daysOfWeek[currentDayIndex]; // 获取今天的秒杀活动时间段

      // 检查当前时间是否在秒杀活动时间段内且活动有效
      if (today && today.isActive && timeString >= today.startTime && timeString < today.endTime) {
        setCurrentDay(today.day); // 设置当前秒杀活动的星期几
        setIsInProgress(true); // 设置秒杀活动进行中

        // 设置结束时间
        setEndTime(today.endTime);

        // 计算剩余时间
        const endTime = new Date();
        const [endHour, endMinute] = today.endTime.split(':');
        endTime.setHours(endHour, endMinute, 0, 0);
        const remaining = Math.max(0, (endTime - now) / 1000); // 剩余时间（秒）
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = Math.floor(remaining % 60);
        setRemainingTime(`${hours}小时 ${minutes}分钟 ${seconds}秒`);
      } else {
        setCurrentDay(null); // 当前没有秒杀活动
        setIsInProgress(false); // 秒杀活动未进行
        setEndTime(''); // 清空结束时间
        setRemainingTime(''); // 清空剩余时间
      }
    }, 1000); // 每秒检查一次

    return () => clearInterval(interval); // 清除定时器
  }, []);


  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">{isInProgress ? '活动已开始' : '当前没有秒杀活动'}</h1>
      {isInProgress && <h2 className="text-xl mb-2">秒杀活动进行中</h2>}
      {isInProgress && <h2 className="text-xl mb-4">剩余时间: {remainingTime}</h2>} {/* 显示剩余时间 */}
      {isInProgress && <h2 className="text-xl mb-4">结束时间: {endTime}</h2>} {/* 显示结束时间 */}
      <div className="flex flex-wrap justify-center gap-4">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`p-4 border border-black ${currentDay === day.day ? 'bg-yellow-300' : 'bg-white'} flex-1 min-w-[200px]`}
          >
            {day.day} - {day.startTime} 到 {day.endTime}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;


// 示例：在组件外部调用撤销函数
/*
const exampleUsage = () => {
  // 撤销星期一的秒杀活动
  cancelActivity(0);
};

exampleUsage();
*/
