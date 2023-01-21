
const conteinerRight = document.querySelector(".conteiner_right");
const product12 = document.querySelectorAll(".product");
const tax = 1.18;
const shipping = 15.0;


let products = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", () => {
  getProductsFromLocalStorage();
  productTotal();
});
const getProductsFromLocalStorage = () => {
  products.forEach((product) => {
    createproduct(product);
  });
};

conteinerRight.addEventListener("click", (e) => {
  if (e.target.className == "negativeButton") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      productTotal();
    }
  }
  if (e.target.className == "plusButton") {
    if (e.target.previousElementSibling.innerText >= 0) {
      e.target.previousElementSibling.innerText++;
      productTotal();
    }
  }
  if (e.target.className == "btn_remove") {
    e.target.closest(".product").remove();
  }
});

let productTotal = () => {
  for (i = 0; i < product12.length; i++) {
    let price1 = Number(
      document.querySelector(`.product_currentPrice${i}`).innerText
    );
    let quantity1 = Number(
      document.querySelector(`.urunMiktari${i}`).innerText
    );
    let ProductTotal = document.querySelector(`.product_totalPrice${i}`);
    let x = +(price1 * quantity1).toFixed(2);
    ProductTotal.innerText = x;
  }
  
};
