function updateCountdown() {
    const counterElements = document.querySelectorAll('.day-deal-information-counter .counter');
    let totalSeconds = 1 * 24 * 60 * 60 + 23 * 60 * 60 + 55 * 60 + 32; // Initial time

    function formatTime(value) {
        return value < 10 ? `0${value}` : value;
    }

    function updateDisplay() {
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        counterElements[0].querySelector('div:first-child').textContent = formatTime(days);
        counterElements[1].querySelector('div:first-child').textContent = formatTime(hours);
        counterElements[2].querySelector('div:first-child').textContent = formatTime(minutes);
        counterElements[3].querySelector('div:first-child').textContent = formatTime(seconds);

        if (totalSeconds > 0) {
            totalSeconds--;
        }
    }

    updateDisplay();

    setInterval(updateDisplay, 1000);
}

function addProductHoverEffects() {
    const shoeCards = document.querySelectorAll('.shoe-card, .shoe-card-final');
    
    shoeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

function addCartFunctionality() {
    const shoeCards = document.querySelectorAll('.shoe-card, .shoe-card-final');
    const cart = {
        items: [],
        total: 0
    };

    shoeCards.forEach(card => {
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add('add-to-cart-btn');
        addToCartButton.style.cssText = `
            background-color: #2C43C7;
            color: white;
            border: none;
            padding: 10px 15px;
            margin-top: 10px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        `;

        addToCartButton.addEventListener('mouseenter', () => {
            addToCartButton.style.backgroundColor = '#1F222B';
        });

        addToCartButton.addEventListener('mouseleave', () => {
            addToCartButton.style.backgroundColor = '#2C43C7';
        });

        addToCartButton.addEventListener('click', () => {
            const title = card.querySelector('.title').textContent;
            const price = card.querySelector('.price').textContent;
            
            cart.items.push({ title, price });
            cart.total += parseFloat(price.replace('$', '').replace(/\s/g, ''));

            alert(`Added ${title} to cart!\nCurrent Cart Total: $${cart.total.toFixed(2)}`);
        });

        card.appendChild(addToCartButton);
    });
}

function createNewsletterModal() {
    const modal = document.getElementById('newsletter-modal');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const emailInput = document.getElementById('email-input');

    setTimeout(() => {
        modal.style.display = 'flex';
    }, 3000);

    subscribeBtn.addEventListener('click', () => {
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('¡Gracias por suscribirte!');
            modal.style.display = 'none';
        } else {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', createNewsletterModal);

document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    addProductHoverEffects();
    addCartFunctionality();
    createNewsletterModal();
});