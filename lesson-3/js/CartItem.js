class CartItem extends GoodsItem {
    constructor(id, name, price, img) {
        super(id, name, price, img);
        this.count = 1;
    }

    /**
     * Метод генерирует HTML-разметку товара корзины
     * @returns HTML-разметка товара корзины
     */
    render() {
        return `<div id="${this.id_product}" class="goods-item" data-name="${this.product_name}" data-price="${this.price}" data-img="${this.img}">
            <img src="${this.img}" alt="preview">
            <h3>${this.product_name}</h3>
            <p>${this.price * this.count}</p>
            <p>${this.count} шт.</p>
            <button class="cart-item__remove-from-cart"><i class="fas fa-shopping-cart"></i> удалить</button>
        </div>`;
    }
}