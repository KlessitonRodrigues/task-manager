import { apiClientInit } from './@client/src';

export const apiClient = apiClientInit({
  platform: 'web',
  dataSync: false,
  localStorage: {
    onReading: () => localStorage.getItem('CALENDAR_APP'),
    onSaving: data => localStorage.setItem('CALENDAR_APP', data),
  },
});
