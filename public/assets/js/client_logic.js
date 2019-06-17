$('#burger-form').on('submit', function() {

    // create new object with user input
    let burger = {
        burger_name: $('#burger-entry').val().trim(),
        devoured: 0
    }

    // post data to server
    $.ajax('/api/burgers', {
        type: 'POST',
        data: burger
    })
})


$(document).on('click', '#eat', function() {
    let id = $(this).attr('data-id')

    // send id of burger to be updated to the server
    $.ajax('/api/burgers/' + id, {
        type: 'PUT'
    })
    
    location.reload() 
})