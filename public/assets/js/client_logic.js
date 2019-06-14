$(function() {
    $('#burger-form').on('submit', () => {
        event.preventDefault()

        let burger = {
            name: $('#burger-entry').val().trim()
        }

        $.ajax('/api/burgers', {
            type: 'POST', 
            data: burger
        })
        .then( () => location.reload())
    })
})