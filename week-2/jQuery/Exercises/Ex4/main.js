
$('.item').on('click' ,function(){
    if($(this).data().instock)
        $('#cart').append(`<div> ${this.textContent} </div>`)
} )

