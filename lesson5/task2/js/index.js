import { shopping } from "./modules/shopping.js";

const render = (obj, box) => {
  for (let key in obj) {
    box.append(`<p>${key}:${obj[key]}</p>`);
  }
};
let shop = [1000, 100, 50, 80];
let basket;
let check;
let rest = false;
$("#addProduct").click(() => {
  $(".showProduct").html("");
  $("#radios")
    .children()
    .each((index, item) => {
      if ($(item).is(":checked")) {
        if (shop[index + 1] - $("#count").val() < 0) {
          shopping.clearBasket();
          $("#exampleModal").modal("show");
          $(".modal-body").html(
            `вибачте але на складі залишилось ${$(item).val()} ${
              shop[index + 1]
            } `
          );
          rest = false;
        } else {
          shopping.shop(shop, index + 1, $("#count").val());
          basket = shopping.addToBasket($(item).val(), $("#count").val());
          rest = true;
        }
      }
    });
  if (rest) {
    render(basket, $(".showProduct"));
  }
  $("#count").val("");
});

$("#buyProduct").click(() => {
  $(".showProduct").html("");
  $(".right").html("");
  check = shopping.showCheck("Bсього", basket);
  render(check, $(".right"));
  shop[0] += parseInt(check["Bсього"]);
  $(".shop").each((index, item) => {
    $(item).val(shop[index] + " шт");
  });
  shopping.clearBasket();
});
