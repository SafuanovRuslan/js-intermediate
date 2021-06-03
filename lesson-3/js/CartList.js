class CartList {
    constructor() {
        this.cartList = {};
    }

    /**
     * Метод добавляет товар в корзину
     * @param {String} id Идентификатор товара
     * @param {String} product Объект с информацией о товаре
     */
    add(id, product) {
        if ( this.cartList[id] ) {
            this.cartList[id].count++;
        } else {
            this.cartList[id] = product;
        }

        this.render();
        this.showCart();
    }

    /**
     * Метод удаляет товар из корзины по значению id
     * @param {String} id id товара
     */
    remove(id) {
        if ( this.cartList[id].count == 1 ) {
            delete this.cartList[id];
        } else {
            this.cartList[id].count--;
        }

        this.render();
    }

    /**
     * Метод отрисовывает корзину
     */
    render() {
        let cart = '';

        for (let id in this.cartList) {
            cart += this.cartList[id].render();
        }
        
        document.querySelector('.cart-list').innerHTML = cart;
        this.setRemoveFromCartHandlers();
    }

    /**
     * Метод добавляет обработчики товарам в корзине
     */
    setRemoveFromCartHandlers() {
        document.querySelectorAll('.cart-item__remove-from-cart').forEach((button) => {
            button.addEventListener('click', (event) => {
                let product = event.target.closest('div');
                let productId = product.id;
                this.remove(productId);
            })
        });
    }

    /**
     * Метод добавляет обработчики товарам в каталоге
     */
    setAddToCartHandlers() {
        document.querySelectorAll('.goods-item__add-to-cart').forEach((button) => {
            button.addEventListener('click', (event) => {
                let product = event.target.closest('div');
                let productId = product.id;
                let productName = product.dataset.name;
                let productPrice = product.dataset.price;
                let productImg = product.dataset.img;

                let cartItem = new CartItem(productId, productName, productPrice, productImg);

                this.add(productId, cartItem);
            })
        });
    }

    /**
     * Метод очищает корзину
     */
    clear() {
        this.cartList = {};
    }

    showCart() {
        console.log(this.cartList);
    }

    /**
     * Метод отправляет данные о заказе на сервер
     */
    post() {
        // какой-то код
    }
}