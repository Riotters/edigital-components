import { color } from '../utils/colors';

interface ThemeTypes {
  [key: string]: {
    [key: string]: string;
  };
}

export const eDigital: ThemeTypes = {
  dark: {
    textColor: color.gray300,
  },
  light: {
    textColor: color.gray800,
  },
};
