import React, { useState, useEffect, useRef } from 'react';
import { selectStudentByProbability } from './probability';
import studentsData from './students.json';

const Wheel = () => {
  const [students, setStudents] = useState(studentsData);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // 处理开始按钮点击事件
  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      const selected = selectStudentByProbability(students);
      setSelectedStudent(selected);
    }, 100);
  };

  // 处理暂停按钮点击事件
  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // 处理概率输入的变化
  const handleProbabilityChange = (index, value) => {
    const newStudents = [...students];
    newStudents[index].probability = parseInt(value, 10);
    setStudents(newStudents);
  };

  // 清理定时器
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* 显示当前选中的学生 */}
      <div className="text-white text-3xl mb-4">
        {selectedStudent ? selectedStudent.name : '点击开始点名'}
      </div>
      {/* 开始和暂停按钮 */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleStart}
          disabled={isRunning}
        >
          开始
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleStop}
          disabled={!isRunning}
        >
          暂停
        </button>
      </div>
      {/* 概率输入框 */}
      <div className="mt-4 flex flex-wrap justify-center space-x-4">
        {students.map((student, index) => (
          <div key={index} className="flex flex-col items-center m-2">
            <label className="text-white">{student.name}</label>
            <input
              type="number"
              value={student.probability}
              onChange={(e) => handleProbabilityChange(index, e.target.value)}
              className="w-16 p-1 text-center"
              style={{ display: 'none' }} // 隐藏输入框
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;