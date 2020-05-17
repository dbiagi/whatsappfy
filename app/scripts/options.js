const log = console.log
const storage = browser.storage.local
const inputs = document.querySelectorAll('input[data-setting]')

function updateUI(settings) {
    inputs.forEach(el => {
        let key = el.getAttribute('data-setting')

        el.value = settings[key]
    })
}

function saveSettings() {
    let settings = {}

    inputs.forEach(el => {
        let key = el.getAttribute('data-setting')

        settings[key] = el.value
    })

    storage.set(settings)
}

document.querySelector('button[data-setting-submit]').addEventListener('click', e => saveSettings())

storage.get().then(settings => updateUI(settings))