document.getElementById('ram8GB').addEventListener('click', function() {
    document.getElementById('memory-cost').innerText = 0;
})
document.getElementById('ram16GB').addEventListener('click', function() {
    document.getElementById('memory-cost').innerText = 180;
})

document.getElementById('ssd256GB').addEventListener('click', function() {
    document.getElementById('storage-cost').innerText = 0;
})
document.getElementById('ssd512GB').addEventListener('click', function() {
    document.getElementById('storage-cost').innerText = 100;
})
document.getElementById('ssd1TB').addEventListener('click', function() {
    document.getElementById('storage-cost').innerText = 180;
})
document.getElementById('free-delivery').addEventListener('click', function() {
    document.getElementById('dalivery-cost').innerText = 0;
})
document.getElementById('paid-delivery').addEventListener('click', function() {
    document.getElementById('dalivery-cost').innerText = 20;
})
