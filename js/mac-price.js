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
    // --------
    // const afterDiscountPrice = document.getElementById('after-discount-price');
    // afterDiscountPrice.innerText = totalCost;
}
document.getElementById('promo-code').addEventListener('click', function(){
    const promoCode = document.getElementById('promo-code-input').value;
    if(promoCode == 'stevekaku') {
        const presentPriceText = document.getElementById('total-ammount').innerText;
        const presentPrice = parseInt(presentPriceText);
        const discountPrice = presentPrice - 20;
    }
    const afterDiscountPrice = document.getElementById('total-ammount');
    afterDiscountPrice.innerText = totalCost;
})

document







// document.getElementById('promo-code').addEventListener('click', function (){
//    const  totalCost = document.getElementById('total-price').innerText;
//    console.log('total price found')
   
//    const afterDiscountPrice = document.getElementById('total-ammount');
//    const promoCode = document.getElementById('promo-code-input');
//    const promoCodeNumber = promoCode.value;
//    if (promoCodeNumber == 'stevekaku') {
//             const discount = totalCost / 5;
//             const priceAfterDiscount = totalCost - discount;
//             afterDiscountPrice.innerText = priceAfterDiscount;
//             console.log('promo code paice');
//         }
// })

const afterDiscountPrice = document.getElementById('after-discount-price');
    afterDiscountPrice.innerText = totalCost;



// // promo code apply for 20% discount
// document.getElementById('promo-code').addEventListener('click', function () {
//     const totalCost = document.getElementById('total-price').innerText;
//     const afterDiscountPrice = document.getElementById('total-ammount');
//     const promoCode = document.getElementById('promo-code-input');
//     const promoCodeNumber = promoCode.value;
//     if (promoCodeNumber == 'stevekaku') {
//         const discount = totalCost / 5;
//         const priceAfterDiscount = totalCost - discount;
//         afterDiscountPrice.innerText = priceAfterDiscount;
//     }
//     else if (promoCodeNumber == '') {
//         alert('মাদারচোদ!!! প্রোমোকোড না দিয়াই গুতান চোদাও ক্যা?')
//     }
//     else if (promoCodeNumber != 'stevekaku') {
//         alert('বাইঞ্ছোদ ভুল কোড গুতাও ক্যা? আবার ঊল্ডা পাল্ডা কোড ইনপুট করন চোদাইলে ওয়েবসাইট দিয়া লাত্থি মাইরা বাইর কইরা দিমু।')
//     }
//     promoCode.value = '';
//     // for after discount price update
//     const afterDiscountPrice = document.getElementById('total-ammount');
//     afterDiscountPrice.innerText = totalCost;
// })


