$('#burger-form').on('submit', () => {

    let burger = {
        burger_name: $('#burger-entry').val().trim(),
        devoured: 0
    }

    $.post('/api/burgers', burger)
        .then( () => location.reload())
})

$('#eat').on('click', () => {
    let id = $(this).attr('data-id')
    console.log(id)

    $.ajax('/api/burgers/', {
        type: 'PUT',
        data: id
    }).then(() => location.reload())
})