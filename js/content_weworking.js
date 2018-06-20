let contentWeworking = document.querySelector(".content-weworking");

contentWeworking.onclick = function (event) {
    if (screen.width > 576) {
        alert("Не настроены скрипты для декстопа")
    } else {
        if (!event.target.classList.contains('content-weworking-item-text-ulist__list--open')) return;
        let item = event.target.closest('.content-weworking-item')
        if (item.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "none"
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/open.svg) top left no-repeat";
            item.style.background = "#FFFFFF"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

        } else {
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "block"
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/close.svg) top left no-repeat";
            item.style.background = "#F7F7F7"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";
        }
    }
}