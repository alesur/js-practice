const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "https://image.flaticon.com/icons/svg/2786/2786842.svg";

const container = document.createElement("div");
container.setAttribute("class", "container");

//app.appendChild(logo);
app.appendChild(container);

//var request = new XMLHttpRequest();

// request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

// request.onload = function() {
//   var data = JSON.parse(this.response);

//   //Source handling
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
axios
  .get("https://ghibliapi.herokuapp.com/films")
  .then(function(response) {
    response.data.forEach(movie => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const productImage = document.createElement("img");
      productImage.setAttribute("class", "product-img");
      productImage.src = "http://bit.ly/2tMBBTd";

      const productInfo = document.createElement("div");
      productInfo.setAttribute("class", "product-info");

      const productText = document.createElement("div");
      productText.setAttribute("class", "product-text");

      const productPriceButton = document.createElement("div");
      productPriceButton.setAttribute("class", "product-price-btn");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const h2 = document.createElement("h2");
      h2.textContent = "by studio Ghibli";

      const p = document.createElement("p");
      shordesciption = movie.description.substring(0, 100);
      p.textContent = `${shordesciption}...`;

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Watch Now";

      container.appendChild(card);
      card.appendChild(productImage);

      card.appendChild(productInfo);

      productInfo.appendChild(productText);

      productText.appendChild(h1);
      productText.appendChild(h2);
      productText.appendChild(p);

      productInfo.appendChild(productPriceButton);

      productPriceButton.appendChild(button);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
