import { TodoEvent } from './todoEvent';

export type TodoAPI = {
  LIST: () => TodoEvent[];
  LISTBYINTERVAL: (interval: { start: string; end: string }) => TodoEvent[];
  CREATE: (data: TodoEvent) => boolean;
  UPDATE: (data: TodoEvent) => boolean;
  DELETE: (id: TodoEvent['id']) => boolean;
};

export type AppAPI = {
  todoAPI: TodoAPI;
};
