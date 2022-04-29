const mainYoutubeURL = "https://www.youtube.com/watch?v=";

function requestPermission() {
    chrome.permissions.request({
        permissions: ['tabs'],
        origins: ['https://www.youtube.com/']
    });
}

async function getCurrentTab() {
    let queryOptions = {
        active: true,
        currentWindow: true
    };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab !== undefined) {
        changeCurrentTab(tab);
    }
}

function changeCurrentTab(tab) {
    const newYoutubeURL = tab.url.split("/");
    let myNewUrl = `${mainYoutubeURL}${encodeURIComponent(newYoutubeURL[4])}`;
    chrome.tabs.update(tab.id, {
        url: myNewUrl
    });
}

export {requestPermission, getCurrentTab, changeCurrentTab};