import { createUID } from 'src/utils/uid';

export default (routes: APIRoutes) => {
  return (data: Partial<CalendarEventDate>) => {
    data.id = createUID();
    return routes['event-date/create'](data);
  };
};
