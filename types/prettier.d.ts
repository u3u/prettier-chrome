declare const prettier: any;
declare const prettierPlugins: any;

declare namespace Prettier {
  interface Options {
    printWidth: number;
    tabWidth: number;
    useTabs: boolean;
    semi: boolean;
    singleQuote: boolean;
    trailingComma: 'none' | 'es5' | 'all';
    bracketSpacing: boolean;
    jsxBracketSameLine: boolean;
    arrowParens: 'avoid' | 'always';
    parser: 'markdown';
    proseWrap: 'always' | 'never' | 'preserve';
  }
}
