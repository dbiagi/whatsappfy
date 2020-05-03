export class PhoneHelper {
    static isPhone(phone) {
        const normalized = this.normalize(phone)

        return normalized.length === 12 || normalized.length === 13
    }

    static hasCountryPrefix(phone) {
        if (phone.length === 12 || phone.length === 13) {
            return true
        }
        
        // @TODO Add suport to multiple phone country prefix depending on user preference
        return phone.match(/^55/)
    }

    static clearNonDigits(phone) {
        return phone.replace(/\D/g, '')
    }

    static normalize(phone) {
        let normalized = this.clearNonDigits(phone)

        if (!this.hasCountryPrefix(normalized)) {
            normalized = '55' + normalized
        }

        return normalized
    }
}