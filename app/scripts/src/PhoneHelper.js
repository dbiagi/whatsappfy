import phoneCodes from './CountryPhoneCodes'

const PHONE_MIN_SIZE = 10
const PHONE_MAX_SIZE = 14

let codes = []

phoneCodes.forEach(countryCode => codes.push(countryCode.code))

export class PhoneHelper {
    static isPhone(phone) {
        const normalized = this.normalize(phone)

        return normalized.length >= PHONE_MIN_SIZE && normalized.length <= PHONE_MAX_SIZE
    }

    static hasCountryPrefix(phone) {
        for (let index = 0; index < codes.length; index++) {
            if (phone.match(`/^${codes[index]}/`)) {
                return true
            }
        }

        return false
    }

    static clearNonDigits(phone) {
        return phone.replace(/\D/g, '')
    }

    static normalize(phone) {
        let normalized = this.clearNonDigits(phone)

        return normalized
    }
}