import { VmachineService } from "../Services/VendingService.js";
import { ProxyState } from "../AppState.js";
import NotificationService from "../Services/NotificationService.js";

function _drawDollar() {
    document.getElementById('dollar').innerHTML = ProxyState.dollar
}
function _draw() {
    let template = ''
    ProxyState.snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}

export default class Vmachine {
    constructor() {
        ProxyState.on('dollar', _drawSource)
        ProxyState.on('snacks', _draw)
        _draw()
    }
    addCredit(amount) {
        VmachineService.addCredit(amount)
    }
}