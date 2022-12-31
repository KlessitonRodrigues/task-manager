type Theme = {
  size: (n: number, n2?: number) => string;
  colors: {
    current: {
      bg1: string;
      bg2: string;
      bg3: string;
      text1: string;
      text2: string;
      text3: string;
      main: string;
      mainHover: string;
      mainBg: string;
      alternative: string;
      alternativeHover: string;
      alternativeBg: string;
    };
    gray: string;
    yellow: string;
    red: string;
    green: string;
    white: string;
    black: string;
  };
  shadow: {
    low: string;
    medium: string;
    high: string;
  };
  border: {
    type: {
      small: string;
      medium: string;
      large: string;
    };
    radius: {
      verySmall: '0.2rem';
      small: '0.4rem';
      medium: '0.6rem';
      large: '0.8rem';
      full: '50%';
    };
  };
  fontSize: {
    body: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    bodySmall: string;
  };
  devices: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
  };
};
