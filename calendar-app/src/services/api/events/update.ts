export default (routes: APIRoutes) => {
  return (data: CalendarEvent) => {
    return routes['event/update'](data);
  };
};
