export default class ContentEditableMarkdownEditor implements MarkdownEditor {
  constructor(editor: HTMLElement) {
    this.editor = editor;
  }

  public editor!: HTMLElement;

  public getValue(): string {
    return this.editor.innerText;
  }

  public setValue(value: string): void {
    this.editor.innerText = value;
  }
}
