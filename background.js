import {
    changeIcon
} from './Utils/iconChanger.js';
import {
    requestPermission,
    getCurrentTab
} from './Utils/tabChanger.js';

chrome.runtime.onInstalled.addListener((reason) => {
    if (reason.reason === "install") {
        install_notice();
    }
});

changeIconOnChange();
clickListener();

function install_notice() {
    chrome.tabs.create({url: "./Pages/index.html"});
}

function clickListener() {
    chrome.action.onClicked.addListener((tab) => {
        if (tab.url.includes("youtube.com/shorts/")) {
            chrome.permissions.contains({
                permissions: ['tabs'],
                origins: ['https://www.youtube.com/']
            }, (granted) => {
                if (granted) {
                    getCurrentTab();
                } else {
                    requestPermission();
                }
            });
        }
    });
}

function changeIconOnChange() {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        chrome.tabs.get(tabId, (tab) => {
            changeIcon(tab);
        });
    });
    chrome.tabs.onActivated.addListener((activeInfo) => {
        chrome.tabs.get(activeInfo.tabId, (tab) => {
            changeIcon(tab);
        });
    });
}