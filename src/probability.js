/**
 * 根据概率选择一个学生
 * @param {Array} students - 学生名单，每个学生包含 name 和 probability 属性
 * @returns {Object} - 被选中的学生
 */
export const selectStudentByProbability = (students) => {
  const totalProbability = students.reduce((acc, student) => acc + student.probability, 0);
  const randomValue = Math.random() * totalProbability;
  let cumulativeProbability = 0;
  let selectedStudent = students[0];

  for (const student of students) {
    cumulativeProbability += student.probability;
    if (randomValue <= cumulativeProbability) {
      selectedStudent = student;
      break;
    }
  }

  return selectedStudent;
};