import * as localDb from 'src/utils/localDB';

export const updateTodo = async (params: UpdateTodoParams) => {
  const db = localDb.currentDB();
  if (db === 'local') updateOnLocal(params);
};

export const updateOnLocal = (params: UpdateTodoParams) => {
  const { data } = params;
  const localData = localDb.readData();

  localDb.writeData(localData);
};
