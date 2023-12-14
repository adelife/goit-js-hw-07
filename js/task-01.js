const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const getCateg = categories.forEach(value => {
  const firstCateg = value.firstElementChild.textContent;
  const categLeng = value.lastElementChild.children.length;
  console.log(`Category: ${firstCateg}`);
  console.log(`Elements: ${categLeng}`);
});
