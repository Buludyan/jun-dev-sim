import {readFileSync, writeFileSync, promises as fsPromises} from 'fs';
import {join} from 'path';

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export interface IGuard<TypeGuard> {
  _guard: TypeGuard;
}

export const safeTextToFile = (filename: string, data: string) => {
  writeFileSync(join(__dirname, filename), data, {
    flag: 'w',
  });
};

export const extractWholeTextFromFile = (filename: string) => {
  return readFileSync(join(__dirname, filename), 'utf-8');
};
