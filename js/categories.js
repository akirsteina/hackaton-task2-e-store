$('.btn-indoor').click(function () {
    $('.categorie-indoor-list').removeClass('display-off')
    $('.categorie-outdoor-list').addClass('display-off')
    $('.categorie-accessories-list').addClass('display-off')
})

$('.btn-outdoor').click(function () {
    $('.categorie-outdoor-list').removeClass('display-off')
    $('.categorie-indoor-list').addClass('display-off')
    $('.categorie-accessories-list').addClass('display-off')
})

$('.btn-accessories').click(function () {
    $('.categorie-outdoor-list').addClass('display-off')
    $('.categorie-indoor-list').addClass('display-off')
    $('.categorie-accessories-list').removeClass('display-off')
})