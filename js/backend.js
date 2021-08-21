//  extra price and components
function totalExtraPrice(components, cost) {
    const extraCost = document.getElementById(components + '-cost');
    extraCost.innerText = cost;
}
// extra components  
function forExtraComponents(components) {
    const componentsPrice = document.getElementById(components + '-cost');
    const componentsPriceTotal = parseInt(componentsPrice.innerText);
    return componentsPriceTotal;
}
// update total price
function finalCostUpdate() {
    const bestCost = forExtraComponents('best');
    const memoryCost = forExtraComponents('extra-ram');
    const storageCost = forExtraComponents('extra-ssd');
    const deliveryCost = forExtraComponents('extra-delivery')
    const totalCost = bestCost + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = totalCost;
    // after discount price update
    const afterDiscountPrice = document.getElementById('after-discount-price');
    afterDiscountPrice.innerText = totalCost;
}
// event listeners
// ram
document.getElementById('8gb-ram').addEventListener('click', function () {
    totalExtraPrice('extra-ram', 0);
    finalCostUpdate();
})
document.getElementById('16gb-ram').addEventListener('click', function () {
    totalExtraPrice('extra-ram', 180);
    finalCostUpdate();
})
// ssd
document.getElementById('256gb-ssd').addEventListener('click', function () {
    totalExtraPrice('extra-ssd', 0);
    finalCostUpdate();
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    totalExtraPrice('extra-ssd', 100);
    finalCostUpdate();
})
document.getElementById('1tb-ssd').addEventListener('click', function () {
    totalExtraPrice('extra-ssd', 180);
    finalCostUpdate();
})
// delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    totalExtraPrice('extra-delivery', 0);
    finalCostUpdate();
})
document.getElementById('20$-fast-delivery').addEventListener('click', function () {
    totalExtraPrice('extra-delivery', 20);
    finalCostUpdate();
})

// papply promo code
document.getElementById('promocode-apply-btn').addEventListener('click', function () {
    const totalCost = document.getElementById('total-price').innerText;
    const afterDiscountPrice = document.getElementById('after-discount-price');
    const promoCode = document.getElementById('promocode-input');
    const promoCodeNumber = promoCode.value;
    if (promoCodeNumber == 'stevekaku') {
        const discount = totalCost / 5;
        const priceAfterDiscount = totalCost - discount;
        afterDiscountPrice.innerText = priceAfterDiscount;
    }
    else if (promoCodeNumber == '') {
        alert('put the promo code.')
    }
    else if (promoCodeNumber != 'stevekaku') {
        alert('promo code are not valuable.')
    }
    promoCode.value = '';
})