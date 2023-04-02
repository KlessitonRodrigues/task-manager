import { currentDB, readData, writeData } from 'src/utils/localDB';

export const updateTodo = async (params: UpdateTodoParams) => {
  const db = currentDB();
  if (db === 'local') updateOnLocal(params);
};

export const updateOnLocal = (params: UpdateTodoParams) => {
  const { data } = params;
  const localData = readData();

  localData.events.some(event => {
    if (event.id === data.id) {
      if (event.todos.length) {
        event.todos.some((todo, index) => {
          if (todo.dateISO === data.currentTodo.dateISO) event.todos[index] = data.currentTodo;
          else event.todos.push(data.currentTodo);
        });
      } else event.todos.push(data.currentTodo);
      return true;
    }
  });

  writeData(localData);
};
