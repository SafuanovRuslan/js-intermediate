export default Vue.component('goods-list', {
    template: `
        <div class="goods-list">
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `,
    props: ['goods'],
});