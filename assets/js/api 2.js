function getConverter(have, want, amount) {
  var queryconverterURL =
    // "https://api.api-ninjas.com/v1/convertcurrency?want=EUR&have=USD&amount=5000";
    "https://api.api-ninjas.com/v1/convertcurrency?want=" +
    have +
    "&have=" +
    want +
    "&amount=" +
    amount;
  $.ajax({
    method: "GET",
    url: queryconverterURL,
    headers: { "X-Api-Key": "cIjIyWC0IjyVZyex6O08pw==tm1WuKoKt4tSK2rB" },
    contentType: "application/json",
    // Show result from converter api
    success: function (result) {
      console.log(result);
    },
    // Show errors
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

getConverter(EUR, GBP, 100);

$(".currency-dropdown")
  .children()
  .on("click", (event) => {
    // console.log(e.target.text);
    chosenCurrency = event.target.text;
    console.log(event.target.id);
    // console.log(chosenCurrency);
  });

// console.log(product);

// function getAllProducts(currency) {
//   var queryURL = "https://fakestoreapi.com/products/";
//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (productData) {
//     displayProductCards(productData);
//     createSearchBar();
//     searchInput(productData);
//   });
// }
// getAllProducts();
