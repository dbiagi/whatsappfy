export class WhatsappApiLinkBuilder {
    constructor() {
        this.params = {}
    }

    get WHATSAPP_API_LINK() {
        return 'https://api.whatsapp.com/send'
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