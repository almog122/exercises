
$("body").append("<input type=text>");
$("body").append("<button> Add Human</button>");

$('button').on('click', function () {

    let inputText = $('input').val();

    $("ul").append(`<li> ${inputText} </li>`);
})