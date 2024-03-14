const items = document.querySelectorAll('.item');
const total = document.querySelector('.total-price');

let totalPrice = 0;

items.forEach(item => {
    const likeBtn = item.querySelector('.like');
    const deleteBtn = item.querySelector('.delete');
    const increaseBtn = item.querySelector('.increase');
    const decreaseBtn = item.querySelector('.decrease');
    const quantity = item.querySelector('.quantity span');
    const price = parseInt(item.querySelector('.price').innerText.slice(1));

    likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('clicked');
    });

    deleteBtn.addEventListener('click', function() {
        totalPrice -= parseInt(quantity.innerText) * price;
        item.remove();
        updateTotal();
    });

    increaseBtn.addEventListener('click', function() {
        quantity.innerText = parseInt(quantity.innerText) + 1;
        totalPrice += price;
        updateTotal();
    });

    decreaseBtn.addEventListener('click', function() {
        if (parseInt(quantity.innerText) > 0) {
            quantity.innerText = parseInt(quantity.innerText) - 1;
            totalPrice -= price;
            updateTotal();
        }
    });
});

function updateTotal() {
    total.innerText = `Total: $${totalPrice}`;
}
