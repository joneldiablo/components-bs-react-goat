export { default } from '@farm-js/react-goat/component';
export const nameSuffixes = (suffixes: string[]) => suffixes.reduce((acc, suf) => {
  acc[suf] = ['join', '$props/name', suf];
  return acc;
}, {} as Record<string,string>);
