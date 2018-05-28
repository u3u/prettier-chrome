function hasRect(el: Element) {
  const rect = el.getBoundingClientRect();
  Object.values(rect).every(prop => prop !== 0);
}

function isVisible(el: Element) {
  const { display, visibility } = getComputedStyle(el);
  const visible = display !== 'none' && visibility !== 'hidden';
  return visible && hasRect(el);
}

export function isMultiTextbox(el: Element) {
  const isTextArea = el.tagName === 'TEXTAREA';
  const isContentEditable = el.getAttribute('contenteditable');
  return isTextArea || isContentEditable;
}

export function getAllVisibleTextArea() {
  return [...document.querySelectorAll('*')].filter(
    (el: Element) => isMultiTextbox(el) && isVisible(el),
  );
}
