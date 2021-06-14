Vue.component('goods-list', {
    template: `
        <div class="goods-list">
            <goods-item v-for="good in goods" :good="good" :handler="handler"></goods-item>
        </div>
    `,
    props: ['goods', 'handler'],
});

Vue.component('cart-list', {
    template: `
        <div class="cart-list">
            <cart-item v-for="good in goods" :good="good" :handler="handler"></cart-item>
        </div>
    `,
    props: ['goods', 'handler'],
});

Vue.component('goods-item', {
    template: `
        <div class="goods-item">
            <img src="img/noimage.png" alt="preview">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button class="goods-item__add-to-cart" @click="handler(good)">
                <i class="fas fa-shopping-cart"></i> В корзину
            </button>
        </div>
    `,
    props: ['good', 'handler'],
});

Vue.component('cart-item', {
    template: `
        <div class="cart-item">
            <img src="img/noimage.png" alt="preview">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.totalPrice }}</p>
            <p>{{ good.count }} шт.</p>
            <button class="cart-item__remove-from-cart" @click="handler(good)">
                <i class="fas fa-shopping-cart"></i> удалить
            </button>
        </div>
    `,
    props: ['good', 'handler'],
});

Vue.component('search', {
    template: `
            <button class="search-button" type="button" @click="handler()"><i class="fas fa-search"></i></button>
    `,
    props: ['handler'],
})


const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        isVisibleCart: false,
        shopCart: [],
        searchLine: '',
    },
    methods: {
        async fetch() {
            let response = await fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json');
            let listJSON = await response.json();
            this.goods = await listJSON;
            this.filteredGoods = await listJSON;
        },

        filterGoods() {
            this.filteredGoods = this.goods.filter((value) => {
                return value.product_name.toLowerCase().includes(this.searchLine.toLowerCase());
            });
        },

        addToCart(good) {
            this.isVisibleCart = true;
            if ( this.shopCart.includes(good) ) {
                id = this.shopCart.indexOf(good);
                this.shopCart = this.shopCart.map((good, index) => {
                    if ( index == id ) {
                        good.count++;
                        good.totalPrice = good.price * good.count;
                        return good;
                    } else {
                        return good;
                    }
                });
            } else {
                good.count = 1;
                good.totalPrice = good.price * good.count;
                this.shopCart.push(good);
            }
        },

        removeFromCart(good) {
            id = this.shopCart.indexOf(good);
            if ( this.shopCart[id].count == 1 ) {
                this.shopCart = this.shopCart.filter((good, index) => {
                    if ( index == id ) {
                        good.count--;
                        good.totalPrice = good.price * good.count;
                        return false;
                    } else {
                        return true;
                    }
                });
            } else {
                this.shopCart = this.shopCart.map((good, index) => {
                    if ( index == id ) {
                        good.count--;
                        good.totalPrice = good.price * good.count;
                        return good;
                    } else {
                        return good;
                    }
                });
            }
            if ( this.shopCart.length == 0 ) {
                this.isVisibleCart = false;
            }
        }
    },
    async mounted() {
        await this.fetch();
    }
});