class Goods {
  static list = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];

  static renderGoodsList = function() {
    let goodsList = '';

    this.list.forEach((item) => {
      goodsList += this.renderGoodsItem(item.title, item.price);
    });
    
    document.querySelector('.goods-list').innerHTML = goodsList;
  };

  static renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
}