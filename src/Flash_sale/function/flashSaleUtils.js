// 函数：取消特定日期的秒杀活动
export const cancelActivity = (daysOfWeek, index) => {
  return daysOfWeek.filter((_, i) => i !== index);
};

// 函数：计算剩余时间
export const calculateRemainingTime = (endTime, now) => {
  const remaining = Math.max(0, (endTime - now) / 1000); // 剩余时间（秒）
  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = Math.floor(remaining % 60);
  return `${hours}小时 ${minutes}分钟 ${seconds}秒`;
};

// 函数：获取今天的秒杀活动时间段
export const getTodayFlashSale = (daysOfWeek, currentDayIndex) => {
  return daysOfWeek[currentDayIndex];
};

// 函数：检查当前时间是否在秒杀活动时间段内
export const isFlashSaleInProgress = (today, timeString) => {
  return today && today.isActive && timeString >= today.startTime && timeString < today.endTime;
};

// 函数：获取当前时间字符串
export const getCurrentTimeString = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 8); // 获取当前时间的小时、分钟和秒
};

// 函数：获取当前星期索引
export const getCurrentDayIndex = () => {
  const now = new Date();
  return now.getDay() - 1; // getDay() 返回 0 表示星期天，1 表示星期一，以此类推
};

// 函数：设置今天的结束时间
export const setEndTimeForToday = (today) => {
  const endTime = new Date();
  const [endHour, endMinute] = today.endTime.split(':');
  endTime.setHours(endHour, endMinute, 0, 0);
  return endTime;
};