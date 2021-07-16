
function _drawSource() {
    document.getElementById('source').innerHTML = ProxyState.source
}
function _draw() {
    let template = ''
    ProxyState.snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}

export default class Vmachine {
    constructor() {
        ProxyState.on('source', _drawSource)
        ProxyState.on('snacks', _draw)
        _draw()
    }
    addCredit(amount) {
        VmachineService.addCredit(amount)
    }
}