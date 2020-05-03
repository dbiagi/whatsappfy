export class PhoneHelper {
    static isPhone(phone) {
        const normalized = this.normalize(phone)

        // 14997550367
        return normalized.match(/\d{10,13}/) !== null
    }

    static hasCountryPrefix(phone) {
        
    }

    static normalize(phone) {
        return phone.replace(/\D/g, '')
    }
}