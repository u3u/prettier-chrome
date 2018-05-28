import { isMultiTextbox } from './utils';

chrome.runtime.onMessage.addListener(({ action, options }) => {
  if (action === 'format') {
    const { activeElement } = document;
    if (isMultiTextbox(activeElement)) {
      if (activeElement.tagName === 'TEXTAREA') {
        const textarea = activeElement as HTMLTextAreaElement;
        if (textarea.value.length > 0) {
          textarea.value = prettier.format(textarea.value, {
            parser: 'markdown',
            plugins: prettierPlugins,
            ...options,
          });
        }
      } else {
        const element = activeElement as HTMLElement;
        if (element.innerText.length > 0) {
          element.innerText = prettier.format(element.innerText, {
            parser: 'markdown',
            plugins: prettierPlugins,
            ...options,
          });
        }
      }
    }
  }
});
