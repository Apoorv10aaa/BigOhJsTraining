import { renderProductList } from "../components/productList.js";
import { getSectionObserver, setSectionObserver } from "./home.js";
import { setInfinityScroll } from "./infiniteScroll.js";
import { getCurrentLimit } from "./home.js";
const categoryContainer = document.getElementById("category-list");

export function renderCategories(categories) {
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.innerText = cat.name;

    btn.addEventListener("click", async () => {
      const url = `https://dummyjson.com/products/category/${cat.slug}`;
      let sectionObserver = getSectionObserver();
      if (sectionObserver) sectionObserver.disconnect();

      const productList = document.getElementById("product-list");
      productList.innerHTML = "";
      console.log(productList);
      const sentinel = document.createElement("div");
      sentinel.id = "scroll-sentinel";
      productList.appendChild(sentinel);
      document.getElementById("pageNumbers").innerHTML = "";

      let currentLimit = getCurrentLimit();
      sectionObserver = setInfinityScroll(0, currentLimit, url);
      setSectionObserver(sectionObserver);
    });

    categoryContainer.appendChild(btn);
  });
}
