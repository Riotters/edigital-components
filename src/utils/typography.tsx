interface TypographyTypes {
  [key: string]: {
    [key: string]: string;
  };
}

export const typography: TypographyTypes = {
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  display2xl: {
    size: '64px',
    height: '80px',
    spacing: '-1.2px',
  },
  displayXl: {
    size: '56px',
    height: '72px',
    spacing: '-0.5px',
  },
  displayL: {
    size: '48px',
    height: '56px',
    spacing: '-0.5px',
  },
  displayM: {
    size: '40px',
    height: '48px',
    spacing: '-0.5px',
  },
  displayS: {
    size: '32px',
    height: '40px',
    spacing: '-0.3px',
  },
  displayXs: {
    size: '24px',
    height: '32px',
    spacing: '-0.5px',
  },
  text2xl: {
    size: '20px',
    height: '32px',
    spacing: '-0.1px',
  },
  textXl: {
    size: '18px',
    height: '28px',
    spacing: '-0.1px',
  },
  textL: {
    size: '16px',
    height: '24px',
    spacing: '-0.1px',
  },
  textM: {
    size: '15px',
    height: '24px',
    spacing: '-0.2px',
  },
  textS: {
    size: '14px',
    height: '24px',
    spacing: '-0.2px',
  },
  textXs: {
    size: '12px',
    height: '20px',
    spacing: '-0.2px',
  },
};
