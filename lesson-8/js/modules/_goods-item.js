export default Vue.component('goods-item', {
    template: `
        <div class="goods-item">
            <img src="img/noimage.png" alt="preview">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button class="goods-item__add-to-cart" @click="$parent.$parent.addToCart(good)">
                <i class="fas fa-shopping-cart"></i> В корзину
            </button>
        </div>
    `,
    props: ['good'],
});