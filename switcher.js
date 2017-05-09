chrome.extension.getBackgroundPage().console.log("Working, WOW!")


chrome.webRequest.onBeforeSendHeaders.addListener(
function(details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'User-Agent') {
            details.requestHeaders.splice(i, 1);
            break;
        }
        }
		details.requestHeaders.push({
		name: "User-Agent",
		value: "Switcher"
		});
		chrome.extension.getBackgroundPage().console.log("Switched!")
        return {requestHeaders: details.requestHeaders};
},
{urls: ["http://*/*"]},
["blocking", "requestHeaders"]
)