import { TaskEvent } from './taskEvent';

export type LocalStorage = {
  taskEvent: TaskEvent[];
  modified_at: string;
};
