const allListItem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${allListItem.length}`);

allListItem.forEach((category) => {
  const allListItemTitle = category.querySelector("h2").textContent;
  console.log(`Category: ${allListItemTitle}`);
  const ItemsCount = category.querySelectorAll("ul li").length;
  console.log(`Elements: ${ItemsCount}`);
});
