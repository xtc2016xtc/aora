/*
// 示例：在组件外部调用撤销、恢复和修改函数
const exampleUsage = () => {
    // 撤销星期一的秒杀活动
    cancelActivity(0);

    // 恢复星期二的秒杀活动
    resumeActivity(1);

    // 修改星期三的秒杀活动时间
    modifyActivityTime(2, '14:00', '15:00');
};

exampleUsage();*/
/*
*
*  // 函数：撤销某个星期的秒杀活动
  const cancelActivity = useCallback((index) => {
    daysOfWeek[index].isActive = false;
  }, []);

  // 函数：恢复某个星期的秒杀活动
  const resumeActivity = useCallback((index) => {
    daysOfWeek[index].isActive = true;
  }, []);

  // 函数：修改某个星期的秒杀活动时间
  const modifyActivityTime = useCallback((index, newStartTime, newEndTime) => {
    daysOfWeek[index].startTime = newStartTime;
    daysOfWeek[index].endTime = newEndTime;
  }, []);
* */
