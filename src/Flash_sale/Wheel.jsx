import { useState, useCallback, useRef, useEffect } from 'react';
import {
  cancelActivity,
  calculateRemainingTime,
  getTodayFlashSale,
  isFlashSaleInProgress,
  getCurrentTimeString,
  getCurrentDayIndex,
  setEndTimeForToday,
} from './function/flashSaleUtils.js'; // 导入函数

// 定义一周七天的秒杀活动时间段
const initialDaysOfWeek = [
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
  // 当前秒杀活动的星期几
  // 秒杀活动是否进行中
  // 结束时间
  // 剩余时间
  // 启动定时器
  // 停止定时器
  const [daysOfWeek, setDaysOfWeek] = useState(initialDaysOfWeek), [currentDay, setCurrentDay] = useState(null), [isInProgress, setIsInProgress] = useState(false), [endTime, setEndTime] = useState(''), [remainingTime, setRemainingTime] = useState(''),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      intervalRef = useRef(null), startInterval = () => {
        intervalRef.current = setInterval(() => {
          const currentDayIndex = getCurrentDayIndex(); // 获取当前星期索引
          const timeString = getCurrentTimeString(); // 获取当前时间字符串
          const today = getTodayFlashSale(daysOfWeek, currentDayIndex); // 获取今天的秒杀活动时间段

          // 检查当前时间是否在秒杀活动时间段内且活动有效
          if (isFlashSaleInProgress(today, timeString)) {
            setCurrentDay(today.day); // 设置当前秒杀活动的星期几
            setIsInProgress(true); // 设置秒杀活动进行中

            // 设置结束时间
            setEndTime(today.endTime);

            // 计算剩余时间
            const endTime = setEndTimeForToday(today);
            setRemainingTime(calculateRemainingTime(endTime, new Date()));
          } else {
            setCurrentDay(null); // 当前没有秒杀活动
            setIsInProgress(false); // 秒杀活动未进行
            setEndTime(''); // 清空结束时间
            setRemainingTime(''); // 清空剩余时间
          }
        }, 1000); // 每秒检查一次
      }, stopInterval = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [daysOfWeek, startInterval]);

  // 使用 cancelActivity 函数
  const handleCancelActivity = useCallback((index) => {
    setDaysOfWeek((prevDays) => cancelActivity(prevDays, index));
  }, []);

  console.log("",handleCancelActivity)

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">{isInProgress ? '秒杀活动已开始' : '当前没有秒杀活动'}</h1>
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