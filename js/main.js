let total = 0;
let count = 0;

const purchaseBtn = document.getElementById("purchase-btn");
const applyBtn = document.getElementById("apply-btn");
const totalField = document.getElementById("total");

function cart(target) {
  count++;
  const name = target.children[1].children[1].innerText;
  const priceString = target.children[1].children[2].children[0].innerText;
  const price = parseFloat(priceString);
  total += price;
  const display = document.getElementById("display");
  const tr = document.createElement("tr");
  tr.innerHTML = `
     <td>${count}.</td>
     <td>${name}</td>
    `;
  display.appendChild(tr);
  const totalPrice = document.getElementById("total-price");

  totalPrice.innerText = total.toFixed(2);
  totalField.innerText = total.toFixed(2);
  const modalLink = document.getElementById("modal");
  if (total > 0) {
    purchaseBtn.removeAttribute("disabled");
    modalLink.setAttribute("href", "#my_modal_8");
  }
  if (total >= 200) {
    applyBtn.removeAttribute("disabled");
  }
}

const ratingAll = document.querySelectorAll(".rating");

for (const rating of ratingAll) {
  rating.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

applyBtn.addEventListener("click", function () {
  const coupon = document.getElementById("coupon").value;
  const discountField = document.getElementById("discount");
  if (coupon === "SELL200") {
    const discount = (20 * total) / 100;
    const discountPrice = total - discount;
    discountField.innerText = discount.toFixed(2);
    totalField.innerText = discountPrice.toFixed(2);
  }
});
