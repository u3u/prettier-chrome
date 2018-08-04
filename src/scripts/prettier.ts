/* eslint-disable default-case */
import MarkdownEditorFactory from './utils/MarkdownEditorFactory';

window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  const { activeElement } = document;
  const { action, options, value } = event.data;
  const editor = MarkdownEditorFactory.createMarkdownEditor(activeElement);
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
        ['keydown', 'keyup', 'change', 'input'].forEach(type =>
          activeElement.dispatchEvent(new Event(type)),
        );
        break;
    }
  }
});
