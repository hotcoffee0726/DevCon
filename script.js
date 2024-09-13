document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            const name = menuItem.getAttribute('data-name');
            const price = parseFloat(menuItem.getAttribute('data-price'));

            addToCart(name, price);
        });
    });

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        renderCart();
    }

    function renderCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)} <span class="remove-item" data-name="${item.name}">Remove</span>`;
            cartItemsElement.appendChild(li);
        });

        cartTotalElement.textContent = total.toFixed(2);

        document.querySelectorAll('.remove-item').forEach(removeButton => {
            removeButton.addEventListener('click', (event) => {
                const name = event.target.getAttribute('data-name');
                removeFromCart(name);
            });
        });
    }

    function removeFromCart(name) {
        const index = cart.findIndex(item => item.name === name);

        if (index > -1) {
            cart.splice(index, 1);
        }

        renderCart();
    }
});
