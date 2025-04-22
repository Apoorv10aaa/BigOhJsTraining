import { getHeader } from "../components/header.js";
import { getFooter } from "../components/footer.js";
import { getProductDetails } from "./getProductDetails.js";

document.getElementById("header").appendChild(getHeader());
document.getElementById("footer").appendChild(getFooter());

getProductDetails().then((product) => {
  console.log(product);
});
