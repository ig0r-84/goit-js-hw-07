const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementCount = category.querySelectorAll("ul li").length;
  console.log(category.querySelectorAll("ul li"));
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementCount}`);
});
