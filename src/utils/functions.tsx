import { color } from './colors';
import { shadow } from './shadows';

export function checkColor(myColor: string): string {
  return color[myColor] ?? myColor;
}

export function checkShadow(myShadow: string): string {
  return shadow[myShadow] ?? myShadow;
}

export function isDefined(data: boolean): boolean {
  return data !== null && data !== undefined;
}
