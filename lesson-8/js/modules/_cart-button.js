export default Vue.component('cart-button', {
    template: `
        <button class="cart-button" type="button" @click="$parent.showCart"><i class="fas fa-shopping-cart"></i>
            <div>корзина</div>
            <div class="cart-size" v-if="$parent.shopCart.length!=0">{{ size }}</div>
        </button>
    `,
    props: ['size'],
});