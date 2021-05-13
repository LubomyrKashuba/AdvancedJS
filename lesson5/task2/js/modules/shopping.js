export const shopping = (function () {
  let sum = 0;
  let basket = {};
  return {
    addToBasket: function (product, count) {
      basket[product] = count + " шт";
      return basket;
    },
    showCheck: function (forAll, basket) {
      let check = { ...basket };
      console.log(basket);
      for (let key in check) {
        sum += parseInt(check[key]);
        check[forAll] = sum * 50 + " грн";
      }
      return check;
    },
    shop: function (arr, index, count) {
      arr[index] -= count;
      return arr;
    },
    clearBasket: function(){
      for(let key in basket){
        delete basket[key];
      }
      sum = 0;
    }
  };
})();
