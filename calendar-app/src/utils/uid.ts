export const createUID = () => {
  const random = Math.random();
  const time = new Date().getTime();
  return (random.toString(32) + time.toString(32)).replace(/\W/g, 'f').substring(0, 20);
};
