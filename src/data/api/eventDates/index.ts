import create from './create';
import read from './read';
import remove from './remove';
import update from './update';

export const eventDates = (routes: APIRoutes) => ({
  create: create(routes),
  read: read(routes),
  update: update(routes),
  remove: remove(routes),
});
