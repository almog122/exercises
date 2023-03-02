 const buyItem = function () {
  let itemName = $("#shop-input").val();

  $.get(`/buy/${itemName}`, function (itemData) {
    $("body").append(`<div>Congratulations, you have just bought a ${itemData.name} for ${itemData.price}. There are ${itemData.inventory} left now in the store.</div>` );
  });
}
