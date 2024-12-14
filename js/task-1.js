const categoriesAll = document.querySelector("#categories");
const categoriesLength = categoriesAll.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});


// 
// Number of categories: 3 
//Category:  Animals 
//Elements:  4 
//Category:  Products 
//Elements:  3 
//Category:  Technologies 
//Elements:  5 
