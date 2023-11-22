export const getNumberText = (num: number) => {
  switch (num) {
    case 0:
      return '첫번째';
    case 1:
      return '두번째';
    case 2:
      return '세번째';
    case 3:
      return '네번째';
    case 4:
      return '다섯번째';
    default:
      return `${num + 1}번째`;
  }
};
