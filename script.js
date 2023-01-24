// const taxPrice = 0.18;
// const shippingPrice = 15;
// const shippingFree = 300;

window.addEventListener("load", () => {
  // localStorage.setItem("taxPrice", taxPrice);
  // localStorage.setItem("shippingPrice", shippingPrice);
  // localStorage.setItem("shippingFree", shippingFree);
  sepetFiyati();
});

const productsAnaDiv = document.querySelector(".products");

productsAnaDiv.addEventListener("click", (e) => {
  if (e.target.className === "fa-solid fa-minus") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      urunFiyatlari(e.target);
      sepetFiyati();
    } else {
      e.target.closest(".product").remove();
    }
  } else if (e.target.className === "fa-solid fa-plus") {
    e.target.previousElementSibling.innerText++;
    urunFiyatlari(e.target);
    sepetFiyati();
  } else if (e.target.className === "remove-product") {
    e.target.closest(".product").remove();
    sepetFiyati();
  } else {
    alert("other clicked");
  }
});

const urunFiyatlari = (target) => {
  const productInfoDiv = target.closest(".product-info");
  console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const miktar = productInfoDiv.querySelector(".quantity").innerText;
  productInfoDiv.querySelector(".product-line-price").innerText = (
    price * miktar
  ).toFixed(2);
};

const sepetFiyati = () => {
  const productFiyat = document.querySelectorAll(".product-line-price");
  let subTotal = 0;
  productFiyat.forEach((div) => {
    subTotal += parseFloat(div.innerText);
  });
  const taxsize = subTotal * localStorage.getItem("taxPrice");

  const shipping = parseFloat(
    subTotal > 0 && subTotal < localStorage.getItem("shippingFree")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  const total = subTotal + taxsize + shipping;
  console.log(total);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subTotal.toFixed(2);
  document.querySelector("#cart-tax").lastElementChild.innerText =
    taxsize.toFixed(2);
  document.querySelector("#cart-shipping").lastElementChild.innerText =
    shipping.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText =
    total.toFixed(2);
};
