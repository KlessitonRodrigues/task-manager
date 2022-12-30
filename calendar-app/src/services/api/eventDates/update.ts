export default (routes: APIRoutes) => {
  return (data: CalendarEventDay) => {
    return routes['event-date/update'](data);
  };
};
