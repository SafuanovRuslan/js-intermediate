class CartList {
    constructor() {
        
    }

    static cartList = {};

    /**
     * Метод добавляет товар в корзину
     * @param {String} id Идентификатор товара
     * @param {String} product Объект с информацией о товаре
     */
    static add(id, product) {
        if ( this.cartList[id] ) {
            this.cartList[id].count++;
        } else {
            this.cartList[id] = product;
        }

        console.log(this.cartList);

        CartList.render();
    }

    /**
     * Метод удаляет товар из корзины по значению id
     * @param {String} id id товара
     */
    static remove(id) {
        id = String(id);
        if ( !this.cartList[id] ) return;

        if ( this.cartList[id].count == 1 ) {
            delete this.cartList[id];
        } else {
            this.cartList[id].count--;
        }

        CartList.render();
    }

    /**
     * Метод отрисовывает корзину
     */
    static render() {
        let cart = '';

        for (let id in this.cartList) {
            let item = this.cartList[id];
            cart += this.cartList[id].render();
        }
        
        document.querySelector('.cart-list').innerHTML = cart;

        document.querySelectorAll('.cart-item__remove-from-cart').forEach(function(button) {
            button.addEventListener('click', (event) => {
                let product = event.target.closest('div');
                let productId = product.id;
                CartList.remove(productId);
            })
        });
    }

    /**
     * Метод очищает корзину
     */
    static clear() {
        this.cartList = {};
    }

    static showCart() {
        console.log(this.cartList);
    }

    /**
     * Метод отправляет данные о заказе на сервер
     */
    static post() {
        // какой-то код
    }
}