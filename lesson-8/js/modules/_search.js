export default Vue.component('search', {
    template: `
        <div>
            <input type="text" class="goods-search" v-model="$parent.searchLine">
            <button class="search-button" type="button" @click="handler()"><i class="fas fa-search"></i></button>
        </div>
    `,
    props: ['handler'],
});