import React, { useState, useEffect } from 'react';

const daysOfWeek = [
  { day: '星期一', startTime: '10:00', endTime: '11:00' },
  { day: '星期二', startTime: '10:10', endTime: '12:00' },
  { day: '星期三', startTime: '12:00', endTime: '13:00' },
  { day: '星期四', startTime: '13:00', endTime: '14:00' },
  { day: '星期五', startTime: '14:00', endTime: '15:00' },
  { day: '星期六', startTime: '15:00', endTime: '16:00' },
  { day: '星期天', startTime: '16:00', endTime: '17:00' },
];

const Wheel = () => {
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDayIndex = now.getDay() - 1; // getDay() returns 0 for Sunday, 1 for Monday, etc.
      const currentTime = now.toTimeString().slice(0, 5);
      const today = daysOfWeek[currentDayIndex];

      if (today && today.startTime === currentTime) {
        setCurrentDay(today.day);
      } else {
        setCurrentDay(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{currentDay ? `秒杀活动时间: ${currentDay}` : '当前没有秒杀活动'}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              border: '1px solid black',
              backgroundColor: currentDay === day.day ? 'yellow' : 'white',
            }}
          >
            {day.day} - {day.startTime} 到 {day.endTime}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;