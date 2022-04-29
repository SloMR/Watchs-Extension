async function changeIcon(tab) {
    if (tab.url.includes("youtube.com/shorts/")) {
        chrome.action.setIcon({
            path: {
                "16": "/images/Active/16x16.png",
                "32": "/images/Active/32x32.png",
                "48": "/images/Active/48x48.png",
                "128": "/images/Active/128x128.png"
            }
        });
    } else {
        chrome.action.setIcon({
            path: {
                "16": "/images/Inactive/16x16.png",
                "32": "/images/Inactive/32x32.png",
                "48": "/images/Inactive/48x48.png",
                "128": "/images/Inactive/128x128.png"
            }
        });
    }
}

export {changeIcon};