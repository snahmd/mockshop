import IProduct from "./interfaces/IProduct";
const titleInput = document.getElementById("itemTitle") as HTMLInputElement;
const sortByButton = document.getElementById("sortBy") as HTMLButtonElement;
const filterElectronicsButton = document.getElementById(
  "electronics"
) as HTMLButtonElement;
const filterJewelerysButton = document.getElementById(
  "jewelery"
) as HTMLButtonElement;
const filterMensButton = document.getElementById("mens") as HTMLButtonElement;
const filterWomensButton = document.getElementById(
  "womens"
) as HTMLButtonElement;
const productsContainer = document.getElementById(
  "itemsSection"
) as HTMLDivElement;

fetchAndDisplay();

function fetchAndDisplay() {
  fetch("https://fakestoreapi.com/products")
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch Data");
      }
      return response.json();
    })
    .then((data: IProduct[]) => {
      data.forEach((product: IProduct) => {
        printProduct(product);
      });
    });
}

function clearItemCards() {
  const itemCard = document.querySelectorAll("#delete");
  itemCard.forEach((itemCard) => itemCard.remove());
}

function printProduct(product: IProduct) {
  console.log(product.image);
  const cardContainer = document
    .querySelector("#itemContainer")!
    .cloneNode(true) as HTMLElement;
  (cardContainer.querySelector("#img") as HTMLImageElement).src = product.image;
  (cardContainer.querySelector("#productName") as HTMLElement).textContent =
    product.title;
  (cardContainer.querySelector("#price") as HTMLElement).textContent =
    product.price.toString();
  cardContainer.setAttribute("id", "delete");
  productsContainer.appendChild(cardContainer);
}
