import { splitStringDate } from 'src/utils/date/splitDate';

const formatTodosByWeek = (events: CalendarEvent[]) => {
  const todosByWeek: Record<string, Record<string, CalendarDayEvent[]>> = {};
  const todoMap = new Map<string, Map<string, CalendarDayEvent[]>>();

  events.forEach(event =>
    event.todos.forEach((todo, i) => {
      const dateSplited = splitStringDate(todo.dateISO);
      const { dateKey, weekDay, weekOfYear } = dateSplited;
      const key = `${weekDay}-${dateKey}`;
      const weekKey = `${weekOfYear}`;
      const dayKey = `${weekDay}-${dateKey}`;

      const calendarTodo: CalendarDayEvent = {
        ...event,
        todos: undefined,
        currentTodo: todo,
        currentTodoOcurrence: i,
        currentTodoDateSplited: dateSplited,
        todoAmount: event.todos.length,
      };

      if (todosByWeek[weekKey]) {
        if (todosByWeek[weekKey][dayKey]?.length) todosByWeek[weekKey][dayKey].push(calendarTodo);
        else todosByWeek[weekKey][dayKey] = [calendarTodo];
      } else {
        todosByWeek[weekKey] = {};
        todosByWeek[weekKey][dayKey] = [calendarTodo];
      }

      if (todoMap.get(weekKey)) {
        if (todoMap.get(weekKey)?.get(dayKey)?.length)
          todoMap.get(weekKey)?.get(dayKey).push(calendarTodo);
        else todoMap.get(weekKey)?.set(dayKey, [calendarTodo]);
      } else {
        todoMap.set(weekKey, new Map());
        todoMap.get(weekKey).set(dayKey, [calendarTodo]);
      }
    })
  );

  return { todosByWeek, todoMap };
};

export const calendarData = (events: CalendarEvent[], dateStr: string) => {
  const { todoMap, todosByWeek } = formatTodosByWeek(events);

  console.log(todoMap);

  const weekData = (weekOfYear: string) => {
    return Object.keys(todosByWeek[weekOfYear]).map(dateKey => {
      const [weekDay, day, month] = dateKey.split('-');

      return {
        date: { day, weekDay, month },
        dateData: todosByWeek[weekOfYear][dateKey],
      };
    });
  };

  return Object.keys(todosByWeek).map<CalendarData>(weekOfYear => ({
    weekOfYear,
    weekData: weekData(weekOfYear),
  }));
};
