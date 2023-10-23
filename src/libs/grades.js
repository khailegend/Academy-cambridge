const GRADES = {
  0: 'Tiền Tiểu Học',
  1: 'Lớp 1',
  2: 'Lớp 2',
  3: 'Lớp 3',
  4: 'Lớp 4',
  5: 'Lớp 5',
  6: 'Lớp 6',
  7: 'Lớp 7',
  8: 'Lớp 8',
  9: 'Lớp 9',
  10: 'Lớp 10',
  11: 'Lớp 11',
  12: 'Lớp 12',
};

function hashGrades(idNumber) {
  return GRADES[idNumber];
}

module.exports = {
  GRADES,
  hashGrades,
};
