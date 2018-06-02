/* eslint-disable no-cond-assign */
import TextAreaMarkdownEditor from '../editor/TextAreaMarkdownEditor';
import ContentEditableMarkdownEditor from '../editor/ContentEditableMarkdownEditor';
import CodeMirrorMarkdownEditor from '../editor/CodeMirrorMarkdownEditor';

export default class MarkdownEditorFactory {
  public static createMarkdownEditor(el: Element): MarkdownEditor | null {
    let CodeMirror;
    let AceEditor;
    if ((CodeMirror = MarkdownEditorFactory.isCodeMirrorMarkdownEditor(el))) {
      return new CodeMirrorMarkdownEditor(CodeMirror);
    }
    if ((AceEditor = MarkdownEditorFactory.isAceMarkdownEditor(el))) {
      return new CodeMirrorMarkdownEditor(AceEditor);
    }
    if (MarkdownEditorFactory.isTextAreaMarkdownEditor(el)) {
      return new TextAreaMarkdownEditor(el as HTMLTextAreaElement);
    }
    if (MarkdownEditorFactory.isContentEditableMarkdownEditor(el)) {
      return new ContentEditableMarkdownEditor(el as HTMLElement);
    }
    return null;
  }

  public static isTextAreaMarkdownEditor(el: Element): boolean {
    return el.tagName === 'TEXTAREA';
  }

  public static isContentEditableMarkdownEditor(el: Element): boolean {
    return Boolean(el.getAttribute('contenteditable'));
  }

  public static isCodeMirrorMarkdownEditor(el: Element): boolean {
    const codeMirrorWrapper: any = el.closest('.CodeMirror');
    return codeMirrorWrapper && codeMirrorWrapper.CodeMirror;
  }

  public static isAceMarkdownEditor(el: Element): boolean {
    const aceEditorWrapper: any = el.closest('.ace-editor');
    return aceEditorWrapper && aceEditorWrapper.env.editor;
  }
}
