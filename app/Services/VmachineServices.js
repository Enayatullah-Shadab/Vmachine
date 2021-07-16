class VmachineService {
    buy(item) {
        let value = ProxyState.snacks.find(s => s.name == item)
        if (ProxyState.source >= value.price) {
            ProxyState.source -= value.price
            value.quantity--
            ProxyState.snacks = ProxyState.snacks
        } else {
            window.alert("insufficient balance")
        }
    }
    addMoney(amount) {
        ProxyState.money += amount
    }


}
export const vendingService = new VendingService()