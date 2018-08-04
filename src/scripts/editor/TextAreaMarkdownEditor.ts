export default class TextAreaMarkdownEditor implements MarkdownEditor {
  constructor(editor: HTMLTextAreaElement) {
    this.editor = editor;
  }

  public editor!: HTMLTextAreaElement;

  public getValue(): string {
    return this.editor.value;
  }

  public setValue(value: string): void {
    // https://stackoverflow.com/questions/16195644/in-chrome-undo-does-not-work-properly-for-input-element-after-contents-changed-p
    this.editor.selectionStart = 0;
    this.editor.selectionEnd = value.length;
    document.execCommand('insertText', false, value);
  }
}
