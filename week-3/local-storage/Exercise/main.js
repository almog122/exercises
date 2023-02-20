
const wisdom = []

$('#push').on('click', function(){
  let userText = $('#input').val()

  $('body').append(`<div> ${userText} </div>`);

  wisdom.push({text: userText})
  
  if(wisdom.length % 2 == 0){
    localStorage.wisdom = JSON.stringify(wisdom)
  }

})

$('#clear').on('click', function(){
  localStorage.removeItem('wisdom')
})

let inputs = JSON.parse(localStorage.wisdom)

for(let input of inputs){
  $('body').append(`<div> ${input.text} </div>`);
}
