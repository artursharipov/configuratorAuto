configCalc()

$('#configurator nav').on('click', 'span', function(){
    $(this).siblings().removeClass('is_selected')
    $(this).addClass('is_selected')

    configCalc()
})

$('#configurator .change-color').on('click', 'span', function(){
    var img = $(this).data('img')
    $('#conf-image').attr('src', 'img/configurator/'+ img +'.png')
})

function configCalc(){
    var sum = 0

    $('#configurator .is_selected').each(function(index){
        sum += $(this).data('price')
    })
    
    var formatedSum = sum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')

    $("#conf-price").text(formatedSum)
}