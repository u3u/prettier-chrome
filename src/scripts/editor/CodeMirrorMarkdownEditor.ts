export default class CodeMirrorMarkdownEditor implements MarkdownEditor {
  constructor(editor: any) {
    this.editor = editor;
  }

  public editor!: any;

  public getValue(): string {
    return this.editor.getValue();
  }

  public setValue(value: string): void {
    this.editor.setValue(value);
  }
}
