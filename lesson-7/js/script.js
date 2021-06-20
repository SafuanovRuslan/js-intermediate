// https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json

Vue.component('goods-list', {
    template: `
        <div class="goods-list">
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `,
    props: ['goods'],
});

Vue.component('cart-list', {
    template: `
        <div class="cart-list">
            <cart-item v-for="good in goods" :good="good"></cart-item>
        </div>
    `,
    props: ['goods'],
});

Vue.component('goods-item', {
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

Vue.component('cart-item', {
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

Vue.component('cart-button', {
    template: `
        <button class="cart-button" type="button" @click="$parent.showCart"><i class="fas fa-shopping-cart"></i>
            <div>корзина</div>
            <div class="cart-size" v-if="$parent.shopCart.length!=0">{{ size }}</div>
        </button>
    `,
    props: ['size'],
})

Vue.component('search', {
    template: `
        <div>
            <input type="text" class="goods-search" v-model="$parent.searchLine">
            <button class="search-button" type="button" @click="handler()"><i class="fas fa-search"></i></button>
        </div>
    `,
    props: ['handler'],
})

Vue.component('error', {
    template: `
        <h2 v-if="$parent.filteredGoods.length == 0">Ничего не найдено</h2>
    `,
})


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
            console.log(post)
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
            console.log(this.shopCart);
        },

        async removeFromCart(good) {
            let post = JSON.stringify(good.id_product);
            console.log(post)
            let response = await fetch('/removeFromCart', {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify([good.id_product]),
            });

            this.shopCart = await response.json();
            console.log(this.shopCart);

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