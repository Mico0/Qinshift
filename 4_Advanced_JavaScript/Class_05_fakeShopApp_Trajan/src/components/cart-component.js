import { showNotification } from './notification-component.js';
import ProductService from '../services/product-service.js';
import HTMLHelpers from '../helpers/html-helpers.js';

const cartComponent = (function() {
    const cartProductIds = new Set();
    const productService = new ProductService();

    const addToCart = function(productId) {
        cartProductIds.add(productId);
        // notification component 
        showNotification('Success', 'Added to cart');
    }

    const showProducts = function() {
        console.log(cartProductIds);
        productService.getProductsByIds([...cartProductIds])
            .then(products => {
                console.log(products)
                const cart = document.getElementById('cart');
                cart.innerHTML = '';
                cart.appendChild(HTMLHelpers.createUnorderedListElement(products));

                document.querySelectorAll('.remove-product').forEach(element => {
                    element.addEventListener('click', (e) => {
                        const id = Number(e.target.value);
                        removeProuct(id)
                    });
                });
            });
    }

    const removeProuct = function(productId) {
        cartProductIds.delete(productId);
        showProducts();
    }

    return {
        addToCart,
        showProducts
    }
})();

export default cartComponent;