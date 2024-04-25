// products: an array of product objects
// look in ./products.js to see the data structure
import products from "./products.js";

/**
 *
 * @param {object} product - contains information for a single producy
 * @returns DOM element
 */
const getProductEl = (product) => {
  const productEl = document.createElement("li");
  productEl.classList.add("product-grid-item");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", product.images[0]);
  productEl.appendChild(imgEl);

  const titleEl = document.createElement("h3");
  titleEl.innerText = product.name;
  productEl.appendChild(titleEl);

  const descEl = document.createElement("p");
  descEl.innerText = product.description;
  productEl.appendChild(descEl);

  const btnEl = document.createElement("button");
  btnEl.innerText = "Buy now";
  productEl.appendChild(btnEl);

  return productEl;
};

// The DOM element to append product elements into
const productsContainerEl = document.querySelector("#products");

for (const product of products) {
  const productEl = getProductEl(product);
  productsContainerEl.appendChild(productEl);
}

