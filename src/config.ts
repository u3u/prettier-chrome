export const LOCAL_STORAGE_KEY = 'chrome:prettier-settings';
export const defaultOptions: Prettier.Options = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  parser: 'markdown',
  proseWrap: 'preserve',
};
