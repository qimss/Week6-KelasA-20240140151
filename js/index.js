const API_URL = "https://dummyjson.com/products?limit=200"

const statusEl = document.getElementById("status")
const gridEl = document.getElementById("productGrid")
const searchInput = document.getElementById("searchInput")
const categorySelect = document.getElementById("categorySelect")

let allProducts = []

function formatPrice(usd){
    return `$${usd.toFixed(2)}`
}

function renderProducts(products){
    gridEl.innerHTML = ""

    if (products.length === 0){
        statusEl.textContent = "Produk tidak ditemukan";
        statusEl.classList.remove("error");
        statusEl.style.display = "block";
        return;
    }

    statusEl.style.display = "none";

    const fragment = document.createDocumentFragment();

    products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const isLowStock = product.stock < 10;

    card.innerHTML = `
      <div class="card-img">
        <span class="badge-diskon">-${Math.round(product.discountPercentage)}%</span>
        <img src="${product.thumbnail}" alt="${product.title}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-cat">${product.category}</span>
        <h3 class="card-title">${product.title}</h3>
        <div class="card-meta">
          <span class="rating">${product.rating.toFixed(2)}</span>
          <span class="stock ${isLowStock ? "low" : ""}">
            ${isLowStock ? "Sisa " + product.stock : "Stok: " + product.stock}
          </span>
        </div>
        <div class="card-price-row">
          <span class="price">${formatPrice(product.price)}</span>
        </div>
      </div>
    `;
    fragment.appendChild(card);
  });

  gridEl.appendChild(fragment)
}

function populateCategoryOptions(products) {
  const categories = [...new Set(products.map((p) => p.category))].sort();

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = allProducts.filter((product) => {
    const matchKeyword = product.title.toLowerCase().includes(keyword);
    const matchCategory = category ? product.category === category : true;
    return matchKeyword && matchCategory;
  });

  renderProducts(filtered);
}

async function fetchProducts() {
  try {
    statusEl.textContent = "Memuat produk...";
    statusEl.classList.remove("error");
    statusEl.style.display = "block";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request gagal dengan status ${response.status}`);
    }

    const data = await response.json();
    allProducts = data.products;

    populateCategoryOptions(allProducts);
    renderProducts(allProducts);
  } catch (error) {
    statusEl.textContent = `Gagal memuat data: ${error.message}`;
    statusEl.classList.add("error");
    statusEl.style.display = "block";
    console.error("Fetch error:", error);
  }
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

document.addEventListener("DOMContentLoaded", fetchProducts);
