import HTMLHelpers from "../helpers/html-helpers.js";

function showNotification(type, message, displayTime = 3000) {
    const notification = document.getElementById('notification');
    notification.innerHTML = HTMLHelpers.createNotificationElement(type, message);
    setTimeout(() => {
        notification.innerHTML = '';
    }, displayTime);
}


export {
    showNotification
}