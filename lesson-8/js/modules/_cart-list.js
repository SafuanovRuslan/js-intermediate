export default Vue.component('cart-list', {
    template: `
        <div class="cart-list">
            <cart-item v-for="good in goods" :good="good"></cart-item>
        </div>
    `,
    props: ['goods'],
});