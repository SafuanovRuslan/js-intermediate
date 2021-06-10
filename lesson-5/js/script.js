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
            console.log(this.goods)
            console.log(this.searchLine)
            this.filteredGoods = this.goods.filter((value) => {
                return value.product_name.includes(this.searchLine);
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