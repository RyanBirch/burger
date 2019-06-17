$('#burger-form').on('submit', function() {

    let burger = {
        burger_name: $('#burger-entry').val().trim(),
        devoured: 0
    }

    $.ajax('/api/burgers', {
        type: 'POST',
        data: burger
    })
})


$(document).on('click', '#eat', function() {
    let id = $(this).attr('data-id')

    $.ajax('/api/burgers/' + id, {
        type: 'PUT'
    })
    
    location.reload() 
})