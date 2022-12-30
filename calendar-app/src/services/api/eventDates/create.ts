export default (routes: APIRoutes) => {
  return (data: CalendarEventDay[]) => {
    return routes['event-date/create'](data);
  };
};
