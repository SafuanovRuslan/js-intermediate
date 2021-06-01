class GoodsItem {
    constructor(id_product, product_name, price, img = 'img/noimage.png') {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div id="${this.id_product}" class="goods-item" data-name="${this.product_name}" data-price="${this.price}" data-img="${this.img}">
            <img src="${this.img}" alt="preview">
            <h3>${this.product_name}</h3>
            <p>${this.price}</p>
            <button class="goods-item__add-to-cart"><i class="fas fa-shopping-cart"></i> В корзину</button>
        </div>`;
    }
}