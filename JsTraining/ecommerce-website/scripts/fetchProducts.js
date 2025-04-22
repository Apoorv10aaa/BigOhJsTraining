export async function fetchPaginatedProducts(page, limit, url) {
  const skip = (page - 1) * limit;
  url += `?limit=${limit}&skip=${skip}`;
  console.log("url", url);
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  return data.products;
}
