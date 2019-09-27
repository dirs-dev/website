"use strict";

function showDetail(tabClassName) {
    document.querySelectorAll('.platform').forEach(platform => platform.classList.remove('platform--active'));
    document.querySelector('.platform--' + tabClassName).classList.add('platform--active')
    const activeTab = document.querySelector('.detail--active');
    activeTab.textContent = document.querySelector('.detail--' + tabClassName).textContent;
}

function hideAllDetails() {
    document.querySelectorAll('.detail').forEach(platform => platform.classList.add('detail--hidden'));
}

hideAllDetails();
