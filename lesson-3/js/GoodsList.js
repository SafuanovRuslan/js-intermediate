class GoodsList {
    constructor() {
      this.list = [];
    }

    async fetch() {
        let response = await fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json');
        let listJSON = await response.json();
        this.list = await listJSON;
    }

    render() {
        let goodsList = '';

        this.list.forEach((item) => {
            goodsList += new GoodsItem(item.id_product, item.product_name, item.price).render();
        });
        
        document.querySelector('.goods-list').innerHTML = goodsList;
    }

    costCalculation() {
        let cost = this.list.reduce( (sum, listItem) => sum + listItem.price, 0 );
        console.log(cost);
    }
}