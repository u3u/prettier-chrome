/* eslint-disable import/prefer-default-export */
export function isMultiTextbox(el: Element) {
  const isTextArea = el.tagName === 'TEXTAREA';
  const isContentEditable = el.getAttribute('contenteditable');
  return isTextArea || isContentEditable;
}
