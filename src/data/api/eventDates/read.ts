export default (routes: APIRoutes) => {
  return (from: number, to: number) => {
    return routes['event-date/read'](from, to);
  };
};
