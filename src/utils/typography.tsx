interface TypographyTypes {
  [key: string]: {
    [key: string]: string | number;
  };
}

export const typography: TypographyTypes = {
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  display2xl: {
    size: '64px',
    height: '80px',
    weight: '400',
    spacing: '-1.2px',
  },
  displayXl: {
    size: '56px',
    height: '72px',
    weight: '400',
    spacing: '-0.5px',
  },
  displayLg: {
    size: '48px',
    height: '56px',
    weight: '400',
    spacing: '-0.5px',
  },
  displayMd: {
    size: '40px',
    height: '48px',
    weight: '400',
    spacing: '-0.5px',
  },
  displaySm: {
    size: '32px',
    height: '40px',
    weight: '400',
    spacing: '-0.3px',
  },
  displayXs: {
    size: '24px',
    height: '32px',
    weight: '400',
    spacing: '-0.5px',
  },
  text2xl: {
    size: '20px',
    height: '32px',
    weight: '400',
    spacing: '-0.1px',
  },
  textXl: {
    size: '18px',
    height: '28px',
    weight: '400',
    spacing: '-0.1px',
  },
  textLg: {
    size: '16px',
    height: '24px',
    weight: '400',
    spacing: '-0.1px',
  },
  textMd: {
    size: '15px',
    height: '24px',
    weight: '400',
    spacing: '-0.2px',
  },
  textSm: {
    size: '14px',
    height: '24px',
    weight: '400',
    spacing: '-0.2px',
  },
  textXs: {
    size: '12px',
    height: '20px',
    weight: '400',
    spacing: '-0.2px',
  },
};
