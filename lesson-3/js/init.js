window.onload = async function() {
    let goodsList = new GoodsList();
    await goodsList.fetch();
    goodsList.render();
    goodsList.costCalculation();
}