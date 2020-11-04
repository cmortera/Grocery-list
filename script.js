const form = document.querySelector('form');
const listContainer = document.querySelector('#list')

form.addEventListener('submit', function (e) {
   e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty;
  addNewProduct(product.value, quantity.value);
 product.value = "";
  quantity.value = "";
})

const addNewProduct = (product, quantity) => {
  const newProduct = document.createElement('li');
  newProduct.append(`${quantity} ${product}`);
  listContainer.append(newProduct);
}
