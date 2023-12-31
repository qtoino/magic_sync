console.log("Chrome extension go");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  try {
    if (request.action === "fetchHTML") {
      // Acknowledge receipt of the message to popup.js
      // sendResponse({message: "Request fetchHTML received"});

      // Then send the HTML data to background.js
      chrome.runtime.sendMessage({action: "fetchHTML", html: document.documentElement.outerHTML}, function(response) {
        if (chrome.runtime.lastError) {
          throw new Error(chrome.runtime.lastError.message);
        }
        console.log(response);
        // Optionally handle any response from background.js
      });
    } else if (request.action === "dropHTML") {
      // Acknowledge receipt of the message to popup.js
      // sendResponse({message: "Request dropHTML received"});

      // Then send the HTML data to background.js
      chrome.runtime.sendMessage({action: "dropHTML", html: document.documentElement.outerHTML}, function(response) {
        if (chrome.runtime.lastError) {
          throw new Error(chrome.runtime.lastError.message);
        }
        console.log(response);
        // Optionally handle any response from background.js
      });
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

  // Return true to indicate that you will send a response asynchronously
  return true;
});
