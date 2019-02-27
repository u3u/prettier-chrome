import parsers from './parsers';

const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/prettier.min.js');
script.onload = () => script.remove();
document.body.appendChild(script);

chrome.runtime.onMessage.addListener(({ action, options }) => {
  if (action === 'format') {
    window.postMessage({ action: 'getValue', options }, '*');
  }
});

window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  const { action, options, value } = event.data;
  if (action === 'prettier') {
    window.postMessage(
      {
        action: 'setValue',
        value: prettier.format(value, {
          plugins: [{ parsers }],
          ...options,
        }),
      },
      '*',
    );
  }
});
