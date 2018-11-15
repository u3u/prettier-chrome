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
    jsxSingleQuote: boolean;
    jsxBracketSameLine: boolean;
    arrowParens: 'avoid' | 'always';
    parser:
      | 'babylon'
      | 'flow'
      | 'typescript'
      | 'css'
      | 'scss'
      | 'less'
      | 'json'
      | 'graphql'
      | 'markdown'
      | 'mdx'
      | 'html'
      | 'vue'
      | 'angular'
      | 'yaml';
    proseWrap: 'always' | 'never' | 'preserve';
    htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
  }
}
