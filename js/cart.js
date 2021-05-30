// minus total quantity
$('.btn-minus').on('click', function() {
    const quantity = $(this).parentsUntil(".counter-element").find('.quantity').val();
    if (quantity <= 1) {
        return;
    }
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1);

    // update single product total
    const singlePrice = $(this).parentsUntil(".cart-item").find('.single-price').html();
    let newSingleTotal = countSingleProductTotal(singlePrice, quantity - 1);
    $(this).parentsUntil(".cart-item").find('.total-price').html(newSingleTotal);

    // update total cart value
    countTotal();

});


// plus total quantity
$('.btn-pluss').on('click', function() {
    const quantity = $(this).parentsUntil(".counter-element").find('.quantity').val();
    if (quantity >= 5) {
        return;
    }
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1);

    // update single product total
    const singlePrice = $(this).parentsUntil(".cart-item").find('.single-price').html();
    const newQuantity = parseInt(quantity) + 1;
    let newSingleTotal = countSingleProductTotal(singlePrice, newQuantity);
    $(this).parentsUntil(".cart-item").find('.total-price').html(newSingleTotal);

    // update total cart value
    countTotal();
});


// calculate total price for single product
const countSingleProductTotal = (value, quantity) => {
    return newValue = (value * quantity).toFixed(2);
};

// calculate total price for all the products in cart
const countTotal = () => {
    let total = 0;
    $('.total-price').each(function() {
        total += parseFloat($(this).html());
    });
    $('.total-price-all').html(total.toFixed(2));
};

// remove cart element
$('.remove-button').on('click', function() {
    $(this).parentsUntil("ul").remove();
    countTotal();
    let cartItemsCount = 0;
    $('.cart-element').each(function() {
        cartItemsCount += 1;
    });
    $('.cart-items-count').html(cartItemsCount);
    // add a message in browser if cart is empty
    if (cartItemsCount === 0) {
        $("#empty-cart").removeClass("hidden");
        $("#cart-header").addClass("hidden");
    }
});