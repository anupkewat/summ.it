;'use strict';

const app = {};

app.methods = {};

app.initialStorage = {
  fieldsets: [{
    name: 'Summarize',
    url: 'https://google.com/search?q="%s"',
  }],
};

app.methods.setContextMenuItems = (fieldsets) => {
  for (const index in fieldsets) {
    if (fieldsets[index].name === '_separator_') {
      chrome.contextMenus.create({
        id: index,
        contexts: ['selection'],
        type: 'separator',
      });
    } else {
      chrome.contextMenus.create({
        id: index,
        title: fieldsets[index].name,
        contexts: ['selection'],
      });
    }
  }
};
