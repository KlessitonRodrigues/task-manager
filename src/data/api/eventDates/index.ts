import create from './create';
import read from './read';
import update from './update';
import remove from './remove';

export const eventDates = (routes: APIRoutes) => ({
  create: create(routes),
  read: read(routes),
  update: update(routes),
  remove: remove(routes),
});
