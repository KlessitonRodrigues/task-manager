import { ChangeEvent } from 'react';

export const handleTextAreaEv = (ev: ChangeEvent<HTMLTextAreaElement>) => {
  // @ts-ignore
  if (ev.nativeEvent.inputType === 'insertLineBreak') return ev.target.value + '⚈ ';
  return ev.target.value;
};
