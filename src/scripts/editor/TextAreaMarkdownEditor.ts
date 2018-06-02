export default class TextAreaMarkdownEditor implements MarkdownEditor {
  constructor(editor: HTMLTextAreaElement) {
    this.editor = editor;
  }

  public editor!: HTMLTextAreaElement;

  public getValue(): string {
    return this.editor.value;
  }

  public setValue(value: string): void {
    this.editor.value = value;
  }
}
