$('#burger-form').on('submit', function() {

    let burger = {
        burger_name: $('#burger-entry').val().trim(),
        devoured: 0
    }

    // $.ajax('/api/burgers', {
    //     type: 'POST',
    //     data: burger
    // })

    $.post('/api/burgers', burger)
})


$(document).on('click', '#eat', function() {
    let id = $(this).attr('data-id')
    console.log('id: ' + id)
    console.log('this: ' + $(this))

    $.ajax('/api/burgers', {
        type: 'PUT',
        data: id
    })
    .then(function() { location.reload() })
})