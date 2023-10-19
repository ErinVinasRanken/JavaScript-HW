

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btnClick').onclick = () => {
        // Get the input values
        const burgers = parseInt(document.getElementById('burgers').value);
        const fries = parseInt(document.getElementById('fries').value);
        const sodas = parseInt(document.getElementById('sodas').value);

        // Calculate the total cost
        const burgerCost = burgers * 1;
        const friesCost = fries * 2;
        const sodasCost = sodas * 2.5;
        const totalCost = burgerCost + friesCost + sodasCost;

        // Display the result
        const totalCostElement = document.getElementById("totalCost");
        totalCostElement.innerHTML = `<h3>Your Total Cost: $${totalCost.toFixed(2)}</h3>`;
    };
});