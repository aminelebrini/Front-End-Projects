function discover() {
    window.location.href = "./page2.html";
}

function iphone(element) {
    const productCard = element.closest('.pro1');
    const image = productCard.querySelector('.product-img').src;
    const name = productCard.querySelector('.product-name').textContent;
    const price = productCard.querySelector('.product-price').textContent;
    const oldPrice = productCard.querySelector('.product-oldprice s').textContent;

    localStorage.setItem('image', image);
    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('oldPrice', oldPrice);
    

    window.location.href = "./productspage.html";
}

function searchProducts() {
    const input = document.getElementById('search-input').value.toUpperCase();
    const products = document.getElementsByClassName('pro1');
    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByClassName('product-name')[0].textContent.toUpperCase();
        if (productName.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

function iphone(button) {
    const productName = button.closest('.pro1').querySelector('.product-name').textContent;
    localStorage.setItem('storedProductName', productName);
    window.location.href = "productspage.html";
}

function storeProductName(productName) {
    localStorage.setItem('storedProductName', productName);
    window.location.href = "productspage.html";
}