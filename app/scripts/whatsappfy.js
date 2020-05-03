class WhatsappApiLinkBuilder {
    constructor() {
        this.params = {}
    }

    get WHATSAPP_API_LINK() {
        return 'https://web.whatsapp.com/send'
    }

    withPhone(phone) {
        this.params.phone = phone

        return this
    }

    withText(text) {
        this.params.text = text

        return this
    }

    withSource(source) {
        this.params.source = source

        return this
    }

    withData(data) {
        this.params.data = data

        return this
    }

    build() {
        const queryString = new URLSearchParams(this.params)

        this.clear()

        return this.WHATSAPP_API_LINK + '?' + queryString.toString();
    }

    clear() {
        this.params = {}
    }
}

(_ => {
    document.body.addEventListener('click', e => {
        let anchor = null

        if (e.target.tagName === 'A') {
            anchor = e.target
        }

        if (e.target.parentElement.tagName === 'A') {
            anchor = e.target.parentElement
        }

        if (anchor === null) {
            return
        }

        const match = anchor.href.match(/^tel:(.+)/)

        if (match === null) {
            return
        }

        const phone = match[1]

        if (!phone) {
            return
        }

        e.preventDefault()

        const linkBuilder = new WhatsappApiLinkBuilder()
        const link = linkBuilder.withPhone(phone).build()

        window.open(link)
    })
})()