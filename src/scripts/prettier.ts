/* eslint-disable default-case */
import MarkdownEditorFactory from './utils/MarkdownEditorFactory';

window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  const { action, options, value } = event.data;
  const editor = MarkdownEditorFactory.createMarkdownEditor(
    document.activeElement,
  );
  if (editor !== null) {
    switch (action) {
      case 'getValue':
        window.postMessage(
          {
            action: 'prettier',
            value: editor.getValue(),
            options,
          },
          '*',
        );
        break;
      case 'setValue':
        editor.setValue(value);
        break;
    }
  }
});
