const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        isVisibleCart: false,
        isVisibleCatalog: true,
        shopCart: [],
        searchLine: '',
    },
    methods: {
        async fetch() {
            let responseGoods = await fetch('/catalog');
            let listJSON = await responseGoods.json();
            this.goods = await listJSON;
            this.filteredGoods = await listJSON;

            let responseCart = await fetch('/cart');
            let cartJSON = await responseCart.json();
            this.shopCart = await cartJSON;
        },

        filterGoods() {
            this.filteredGoods = this.goods.filter((product) => {
                return product.product_name.toLowerCase().includes(this.searchLine.toLowerCase());
            });
        },

        async addToCart(good) {
            let post = JSON.stringify(good.id_product);
            let response = await fetch('/addToCart', {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([good.id_product]),
              });
            // this.shopCart.splice(this.shopCart.length, 0, good.id_product);
            this.shopCart = await response.json();
        },

        async removeFromCart(good) {
            let post = JSON.stringify(good.id_product);
            let response = await fetch('/removeFromCart', {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([good.id_product]),
            });

            this.shopCart = await response.json();

            this.isVisibleCart = false;
            setTimeout(() => app.isVisibleCart = true, 0);
        },

        showCart() {
            this.isVisibleCart = this.isVisibleCart ? false : true;
            this.isVisibleCatalog = this.isVisibleCatalog ? false : true;
        },
    },
    computed: {
        shopCartSize() {
            return this.shopCart.length;
        },

        renderCart() {
            let count = this.shopCart.length;
            let result = [];

            for (let i = 0; i < count; i++) {
                let good = this.goods.find(item => item.id_product == this.shopCart[i]);

                if ( result.includes(good) ) {
                    let index = result.indexOf(good);
                    result[index].count++;
                    result[index].totalPrice = result[index].price * result[index].count;
                } else {
                    good.count = 1;
                    good.totalPrice = good.price * good.count;
                    result.push(good);
                }
            }

            return result;
        }
    },
    async mounted() {
        await this.fetch();
    },
});

export default {
    app: app
}