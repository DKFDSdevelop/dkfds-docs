'use strict';

document.addEventListener("DOMContentLoaded", function () {

    let copyButtons = document.querySelectorAll('.button-copy');

    for (let i = 0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener("click", function () {
            let codeToCopy = copyButtons[i].parentElement.nextElementSibling.querySelector('code').innerText;
            navigator.clipboard.writeText(codeToCopy);
        });
    }

    let newCopyButtons = document.querySelectorAll('.copy-code');

    newCopyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let container = button.closest('.code-in-tabs');
            if (!container) return;

            let tabs = container.querySelector('fds-tabs');
            if (!tabs) return;

            let selectedTabKey = tabs.getAttribute('data-selected-tab');
            if (!selectedTabKey) return;

            let activePanel = container.querySelector('fds-tab-panel[tab-key="' + selectedTabKey + '"]');
            if (!activePanel) return;

            let codeElement = activePanel.querySelector('code');
            if (!codeElement) return;

            navigator.clipboard.writeText(codeElement.innerText);
        });
    });
});
