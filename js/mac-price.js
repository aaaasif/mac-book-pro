document.getElementById('ram8GB').addEventListener('click', function() {
    document.getElementById('extra-money').innerText = 0;
    totalCalculate()

})
document.getElementById('ram16GB').addEventListener('click', function() {
    document.getElementById('extra-money').innerText = 180;
    totalCalculate()
})
document.getElementById('ssd256GB').addEventListener('click', function() {
    document.getElementById('storage-cost').innerText = 0;  
    totalCalculate()
})
document.getElementById('ssd512GB').addEventListener('click', function() {
    document.getElementById('storage-cost').innerText = 100;
    totalCalculate()
})
document.getElementById('ssd1TB').addEventListener('click', function() {
    document.getElementById('storage-cost').innerText = 180;
    totalCalculate()
})
document.getElementById('free-delivery').addEventListener('click', function() {
    document.getElementById('dalivery-cost').innerText = 0;
    totalCalculate()
})
document.getElementById('paid-delivery').addEventListener('click', function() {
    document.getElementById('dalivery-cost').innerText = 20;
    totalCalculate()
})

function totalCalculate() {
    const bestPrice = document.getElementById('best-price');
    const getBestPrice = parseInt(bestPrice.innerText);

    const extraMoney = document.getElementById('extra-money');;
    const getExtraMoney = parseInt(extraMoney.innerText);

    const storageCost = document.getElementById('storage-cost');
    const getStorageCost = parseInt(storageCost.innerText);
    
    const deliveryCost = document.getElementById('dalivery-cost');
    const getDeliveryCost = parseInt(deliveryCost.innerText)

    const totalResult = getBestPrice + getExtraMoney + getStorageCost + getDeliveryCost;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalResult;
}
