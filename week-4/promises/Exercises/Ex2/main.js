const getRendomWordBook = function () {
  $.get("https://random-word-api.herokuapp.com/word")
  .then((wordArr) => {
    const randomWord = wordArr[0];
    console.log(randomWord);
    $('body').append(`<h1>random word: ${randomWord} </h1>`)

    let bookWord = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomWord}`)
    let gifWord = $.get(`https://api.giphy.com/v1/gifs/random?api_key=ogYYf8r9Ak1Z4865Q2doZNBjL105GpKe&q=${randomWord}`)
    return Promise.all([bookWord, gifWord])
  })
  
  .then((gifBookArr) => {
    const books = gifBookArr[0]
    const gif = gifBookArr[1]

    const bookCategory = books.items[0].volumeInfo.categories[0]
    const gifUrl = gif.data.embed_url

    $('body').append(`<div>book category: ${bookCategory} </div>`)
    $('body').append(`<iframe src=${gifUrl} title=gif></iframe>`)

    return bookCategory;
  })
  .catch((error) => console.log("no book found"))
};

getRendomWordBook();