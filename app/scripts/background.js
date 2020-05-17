const GOTO_BTN_ID = 'goto-whatsapp'
const lang = browser.i18n.getMessage
let settings = null

browser.storage.local.get().then(results => settings = results)

import { WhatsappApiLinkBuilder } from "./src/WhatsappLinkBuilder";
import { PhoneHelper } from "./src/PhoneHelper";

browser.contextMenus.create({
    id: GOTO_BTN_ID,
    title: lang('contextMenuAction'),
    contexts: ["link", "selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== GOTO_BTN_ID) {
        return
    }

    let phone = info.linkUrl || info.linkText || info.selectionText

    if (!PhoneHelper.isPhone(phone)) {
        return
    }

    phone = PhoneHelper.normalize(phone)

    if (!PhoneHelper.hasCountryPrefix(phone) && 'country_prefix' in settings) {
        phone = settings['country_prefix'] + phone
    }

    const url = new WhatsappApiLinkBuilder()
        .withPhone(phone)
        .build()

    browser.tabs.create({ url })
})