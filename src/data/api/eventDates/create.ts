export default (routes: APIRoutes) => {
  return (data: CalendarEventDate[]) => {
    return routes['event-date/create'](data);
  };
};
