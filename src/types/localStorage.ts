import { TodoEvent } from './todoEvent';

export type LocalStorage = {
  taskEvent: TodoEvent[];
  modifiedAt: string;
};
