// minus total quantity
$('.btn-minus').on('click', function() {
    if ($('#quantity').val() <= 1) {
        return;
    }
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
    updateSingleProductTotal();
});


// plus total quantity
$('.btn-pluss').on('click', function() {
    if ($('#quantity').val() >= 5) {
        return;
    }
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
});

// remove cart element
$('.remove-button').on('click', function() {
    console.log('yay');
    $(this).parentsUntil("ul").remove();
});

// calculate total price for single product
const updateSingleProductTotal = () => {
    $(this).
};