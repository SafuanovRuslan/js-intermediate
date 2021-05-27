window.onload = function() {
    let goodsList = new GoodsList();
    goodsList.fetch();
    goodsList.render();
    goodsList.costCalculation();
}