export default Vue.component('error', {
    template: `
        <h2 v-if="$parent.filteredGoods.length == 0">Ничего не найдено</h2>
    `,
});