const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  doesDrinkExist: function(drinkType){

    return drinkNames[drinkType] != undefined;
  },

  makeDrink: function (drinkType) {

    let drinkNames = Object.keys(this.drinkRequirements);

    for (let i in drinkNames) {
      if (drinkNames[i] == drinkType) {

        let drinkReqBeansAmount  = this.drinkRequirements[drinkNames[i]];

        if (this.beans >= drinkReqBeansAmount) {
          this.beans -= drinkReqBeansAmount;
          return;

        } else {

          return;
        }
      }
    }
    

    alert("Sorry, we dont make " + drinkType);
  },


};



coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
