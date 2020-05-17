const lang = browser.i18n.getMessage

document.querySelectorAll('[data-lang]').forEach(el => {
    el.textContent = lang(el.getAttribute('data-lang'))
})