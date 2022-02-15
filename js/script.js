onClick("sixteenGB", "memory-cost", 300);
onClick("eightGB", "memory-cost", 0);
onClick("ssd3", "storage-cost", 500);
onClick("ssd2", "storage-cost", 200);
onClick("ssd1", "storage-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);
onClick("free-delivery", "delivery-cost", 0);



function onClick(clickID, updateID, price) {
    document.getElementById(clickID).addEventListener('click', function () {
        updatePrice(updateID, price);
        calculateTotalCost();
    });

}



function updatePrice(itemID, price) {
    const item = document.getElementById(itemID);
    item.innerText = price;
}


function calculateTotalCost() {
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalCost = document.getElementById("total-price");
    console.log(storageCost.innerText);
    totalCost.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
}