import { setLocalStorage, getLocalStrong} from "./utlis.mjs";
import productaData from "./productaData.mjs";

const dataSource = new productaData("tents");

function addProductsToCart(product) {
    let cart = getLocalStrong("so-cart");
    if(cart=== null) {
        cart = [];

    }
    cart.push(product);
    setLocalStorage("so-cart", cart);
}

async function addProductsToCart(e) {
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductsToCart(product);
}

document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandle);