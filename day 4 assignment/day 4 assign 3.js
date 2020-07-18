

###  Imagine you are going out to do some grocery shopping. 
So you have an array called shoppingList with all the products you want to buy. 
 
Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more. 


Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. ###




$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $totalprice = $this.closest('div').find('lable'); // I have problem with this line
    var value = parseInt($input.val());

    if (value != 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
    $totalprice.innerHTML = value * 2; // Testing if Total price works, It Does NOT

});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value != 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});