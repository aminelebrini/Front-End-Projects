function sendEmail() {
    var em = document.getElementById("email").value;

    if (validate(em)) {
        alert("send email to "+email);
    }
    else{
        alert("email not found");
    }
}

function validate(email) {
    var re  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function search_products()
{
    var element = document.getElementById('search-input').value.toLowerCase();

    var products = document.querySelectorAll('.products');

    products.forEach(function(products){
        var productsname = products.getAttribute('data-name').toLowerCase();
        if(productsname.includes(input))
        {
            products.style.display = 'block';
        }
        else{
            products.style.display = 'none';
        }
    });
}