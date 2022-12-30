import { CSSProperties, RefObject, useRef } from 'react';

export type AnimationConfig = {
  index?: number;
  dur?: string;
  delay?: string;
  inter?: string;
  dir?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fill?: 'none' | 'forwards' | 'backwards' | 'both';
  state?: 'paused' | 'running';
  timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end';
  after?: (el: HTMLElement) => void;
  afterStyles?: CSSProperties;
};

const setElConfig = (element: HTMLElement, config: AnimationConfig) => {
  const { style } = element;
  const { dur, dir, delay, inter, fill, state, timing } = config;

  style.animationDuration = dur || '1s';
  style.animationDelay = delay || '0s';
  style.animationIterationCount = inter || '1';
  style.animationFillMode = fill || 'none';
  style.animationDirection = dir || 'normal';
  style.animationPlayState = state || 'running';
  style.animationTimingFunction = timing || '';
};

const applyCSSProperties = (element: HTMLElement, css: CSSProperties) => {
  const el = element;
  Object.keys(css).forEach(key => {
    // eslint-disable-next-line
    // @ts-ignore
    el.style[key] = css[key];
  });
};

const classListHandle = (el: HTMLElement) => ({
  add: (name: string) => el.classList.add(name),
  remove: (name: string) => el.classList.remove(name),
});

export const useAnimations = <T>(animationList: string[]) => {
  const elRef = useRef() as RefObject<T>;

  return {
    elRef,
    play: (config: AnimationConfig) => {
      if (!elRef.current) Promise.resolve();

      const el = elRef.current as unknown as HTMLElement;
      const index = config.index || 0;

      setElConfig(el, config);
      classListHandle(el).remove(animationList[index]);
      classListHandle(el).add(animationList[index]);

      return new Promise<void>(res => {
        el.onanimationend = () => {
          if (config.afterStyles) applyCSSProperties(el, config.afterStyles);
          classListHandle(el).remove(animationList[index]);
          setTimeout(() => res(), 1);
        };
      });
    },
  };
};
