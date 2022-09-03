chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log("Request");
    // console.log(request.empty);
    let clippings = [];
    chrome.storage.sync.get("list", function (result) {
      // console.log(result);
      if (request.empty == "clear") {
        clippings = [];
      } else if (request.selection && result.list) {
        clippings = [...result.list, request.selection];
      } else if (result.list) {
        clippings = [...result.list];
      } else {
        clippings = [request.selection];
      }
      // console.log(clippings);
      sendResponse({ clips: clippings });
      chrome.storage.sync.set({
        list: clippings,
      });
    });
    return true;
  });