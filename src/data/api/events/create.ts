import { createUID } from 'src/utils/uid';

export default (routes: APIRoutes) => {
  return (data: Partial<CalendarEvent>) => {
    data.id = createUID();
    return routes['event/create'](data);
  };
};
