export default Vue.component('cart-item', {
    template: `
        <div class="cart-item">
            <img src="img/noimage.png" alt="preview">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.totalPrice }}</p>
            <p>{{ good.count }} шт.</p>
            <button class="cart-item__remove-from-cart" @click="$parent.$parent.removeFromCart(good)">
                <i class="fas fa-shopping-cart"></i> удалить
            </button>
        </div>
    `,
    props: ['good'],
});