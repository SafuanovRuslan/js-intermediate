class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = new Set();
    }

    /**
     * Метод добавляет добавку в гамбургер
     * @param {String} topping Название добавки
     */
    addTopping(topping) {
        this.toppings.add(topping);
        return this;
    }

    /**
     * Метод удаляет добавку из гамбургера
     * @param {String} topping Название добавки
     */
    removeTopping(topping) {
        this.toppings.delete(topping);
        return this;
    }

    /**
     * Метод возвращает список добавок
     */
    getToppings() {
        return this.toppings;
    }

    /**
     * Метод возвращает размер гамбургера
     */
    getSize() {
        return this.size;
    }

    /**
     * Метод возвращает начинку гамбургера
     */
    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        let price = 0;
        price += (this.size == 'big') ? 100 : 50;
        
        switch (this.stuffing) {
            case 'cheese':
                price += 10;
                break;
            case 'salade':
                price += 20;
                break;
            case 'potato':
                price += 15;
                break;
        }

        if ( this.toppings.has('spice') ) price += 15;
        if ( this.toppings.has('mayonnaise') ) price += 20;

        console.log(price);
    }

    calculateCalories() {
        let calories = 0;
        calories += (this.size == 'big') ? 40 : 20;
        
        switch (this.stuffing) {
            case 'cheese':
                calories += 20;
                break;
            case 'salade':
                calories += 50;
                break;
            case 'potato':
                calories += 10;
                break;
        }

        if ( this.toppings.has('spice') ) calories += 0;
        if ( this.toppings.has('mayonnaise') ) calories += 5;

        console.log(calories);
    }
  }

  let burger = new Hamburger('small', 'cheese');
  burger.addTopping('mayonnaise').removeTopping('mayonnaise').addTopping('spice');

  burger.calculatePrice();
  burger.calculateCalories();