export const createUID = () => {
  const random = Math.random();
  const time = new Date().getTime();
  const randomStr = random.toString(32);
  const timeStr = time.toString(32);
  return (randomStr + timeStr).replace(/\W/g, 'f').substring(0, 20);
};
