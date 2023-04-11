export const zeroLeft = (n: number) => (n < 10 ? '0' + n : '' + n);

export const getTimeFormat = (): Intl.DateTimeFormatOptions => ({
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

export const dateInputToISO = (dateStr: string, iso: string) => {
  // dateInput = 2023-02-28
  const [yyyy, mm, dd] = dateStr.split('-').map(n => Number(n));
  const date = new Date(iso);
  date.setFullYear(yyyy);
  date.setMonth(mm);
  date.setDate(dd);
  return date.toISOString();
};

export const ISOToDateInput = (iso: string) => {
  // 2018-07-22
  const date = new Date(iso);
  return `${date.getFullYear()}-${zeroLeft(date.getMonth())}-${zeroLeft(date.getDate())}`;
};

export const timeInputToISO = (timeStr: string, iso: string) => {
  // timeInput = 23:59
  const [hh, mm] = timeStr.split(':').map(n => Number(n));
  const date = new Date(iso);
  date.setHours(hh);
  date.setMinutes(mm);
  return date.toISOString();
};

export const ISOToTimeInput = (iso: string) => {
  return new Date(iso).toLocaleTimeString('en', { hour12: false, timeStyle: 'short' });
};
