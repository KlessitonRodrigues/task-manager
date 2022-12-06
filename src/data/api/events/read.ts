export default (routes: APIRoutes) => {
  return () => {
    return routes['event/read']();
  };
};
