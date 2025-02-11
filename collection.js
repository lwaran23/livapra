var productfield = document.getElementById('products');
var searchBar = document.getElementById('search-bar');
var productlist = productfield.querySelectorAll("div");

searchBar.addEventListener('keyup', function(e) {
    var enteredValue = event.target.value.toUpperCase();

    for(i=0; i<productlist.length; i++) {
        var productName = productlist[i].querySelector('p').textContent;
        if(productName.toUpperCase().indexOf(enteredValue)<0) {
            productlist[i].style.display = 'none';
        } else {
            productlist[i].style.display = 'block';
        }
    }
})