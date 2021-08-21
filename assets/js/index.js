"use strict";

function showDetail(tabClassName) {
    document.querySelectorAll('.platform').forEach(platform => platform.classList.remove('platform--active'));
    document.querySelector('.platform--' + tabClassName).classList.add('platform--active')
    hideAllDetails();
    document.querySelector('.detail--' + tabClassName).hidden = false;
}

function hideAllDetails() {
    document.querySelectorAll('.detail').forEach(platform => platform.hidden = true);
}

hideAllDetails();
