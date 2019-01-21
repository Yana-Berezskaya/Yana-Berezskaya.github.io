var productsCount = document.getElementById('products-count');
console.log(productsCount)
var addToCartButtoms = document.querySelectorAll('.add-to-cart');
console.log(addToCartButtoms);

for (var i=0; i < addToCartButtoms.length; i++) {
	addToCartButtoms[i].addEventListener('click', function(){
		var prevProductsCount = + productsCount.textContent
		productsCount.textContent = prevProductsCount +1;
	})
};