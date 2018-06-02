interface MarkdownEditor {
  editor: any;
  getValue(): string;
  setValue(value: string): void;
}
