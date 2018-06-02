import contextMenus from './background/menus';

function craeteContextMenus(ctxMenus: chrome.contextMenus.CreateProperties[]) {
  // https://crxdoc-zh.appspot.com/extensions/contextMenus#method-create
  chrome.contextMenus.removeAll();
  ctxMenus.forEach((menu) => {
    const createProps = { ...menu, contexts: ['all'] } as any;
    delete createProps.click;
    chrome.contextMenus.create(createProps);
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const menu = ctxMenus.find(item => item.id === info.menuItemId) as any;
    if (menu.click) menu.click(info, tab);
  });
}

function registerCommands(ctxMenus: chrome.contextMenus.CreateProperties[]) {
  chrome.commands.onCommand.addListener((command: string) => {
    if (command === 'format-document') {
      const formatContextMenu: any = contextMenus.find(
        item =>
          item.title !== undefined &&
          item.title.toLowerCase().includes('format'),
      );
      formatContextMenu.click();
    }
  });
}

let initialized = false;

function init() {
  if (initialized) return;
  craeteContextMenus(contextMenus);
  registerCommands(contextMenus);
  initialized = true;
}

chrome.runtime.onInstalled.addListener(init);

init();
