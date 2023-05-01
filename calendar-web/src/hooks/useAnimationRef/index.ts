const useAnimateClass = () => {
  let ref: HTMLDivElement = null;

  const getReactRef = (reactRef: HTMLDivElement) => {
    ref = reactRef;
  };

  const addAnimtateIn = () => {
    if (!ref) return;
    ref.classList.remove('animate-out');
    ref.classList.add('animate-in');
  };

  const addAnimtateOut = () => {
    if (!ref) return;
    ref.classList.remove('animate-in');
    ref.classList.add('animate-out');
  };

  return {
    getReactRef,
    addAnimtateIn,
    addAnimtateOut,
  };
};

export default useAnimateClass;
