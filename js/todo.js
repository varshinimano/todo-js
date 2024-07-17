$('ul').on('click', "li ", function () {
    $(this).toggleClass('grey');
})
$('ul').on('click', "span", function (e) {
    $(this).parent().fadeOut(1000, function () {
        $('this').remove()
    })
})
$('#two').on('keypress', function (event) {
    if (event.which === 13) {
        let newtodo = $(this).val()
        $(this).val('')
        $('ul').append(`<li style="cursor: default;"><span class="material-symbols-outlined" style="font-size: 15px;cursor:pointer">cancel</span> ${newtodo}</li>`)
    }
})  