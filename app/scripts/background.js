const lang = browser.i18n.getMessage
const GOTO_BTN_ID = 'goto-whatsapp'

import { WhatsappApiLinkBuilder } from "./src/WhatsappLinkBuilder";
import { PhoneHelper } from "./src/PhoneHelper";

browser.menus.create({
    id: GOTO_BTN_ID,
    title: lang('contextMenuAction'),
    contexts: ["link", "selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== GOTO_BTN_ID) {
        return
    }

    let phone = info.linkUrl || info.linkText || info.selectionText

    if (!PhoneHelper.isPhone(phone)) {
        return
    }

    phone = PhoneHelper.normalize(phone)

    const url = new WhatsappApiLinkBuilder()
        .withPhone(phone)
        .build()

    browser.tabs.create({url})
})