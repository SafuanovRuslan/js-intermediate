class GoodsList {
    constructor() {
      this.list = [];
    }

    fetch() {
        this.list = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
      ];
    }

    render() {
        let goodsList = '';

        this.list.forEach((item) => {
            goodsList += new GoodsItem(item.title, item.price).render();
        });
        
        document.querySelector('.goods-list').innerHTML = goodsList;
    }

    costCalculation() {
        let cost = this.list.reduce( (sum, listItem) => sum + listItem.price, 0 );
        console.log(cost);
    }
}