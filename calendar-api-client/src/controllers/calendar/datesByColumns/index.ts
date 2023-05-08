import { dates } from '../dates';
import { splitWeeks } from './services/splitWeeks';

export const datesByColumns = (args: CalendarDatesByColumnArgs) => {
  return splitWeeks(dates(args), args.columns);
};
