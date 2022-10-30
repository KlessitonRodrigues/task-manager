export const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
};
