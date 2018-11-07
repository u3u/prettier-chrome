import { LOCAL_STORAGE_KEY, defaultOptions } from '../../config';

export default [
  {
    id: '1',
    title: 'Prettier',
  },
  {
    id: '2',
    parentId: '1',
    enabled: true,
    title: 'Format Document',
    click: () => {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs: chrome.tabs.Tab[]) => {
          chrome.tabs.sendMessage(tabs[0].id as number, {
            action: 'format',
            options: Object.assign(
              {},
              defaultOptions,
              JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'),
            ),
          });
        },
      );
    },
  },
  {
    id: '3',
    parentId: '1',
    type: 'separator',
  },
  {
    id: '4',
    parentId: '1',
    enabled: true,
    title: 'View Options...',
    click: () => window.open(chrome.runtime.getURL('index.html#/popup')),
  },
  {
    id: '5',
    parentId: '1',
    enabled: true,
    title: 'Report Issue...',
    click: () => window.open('https://github.com/u3u/prettier-chrome/issues/new'),
  },
] as chrome.contextMenus.CreateProperties[];
