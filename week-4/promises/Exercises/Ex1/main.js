const getRendomWordBook = function () {
  $.get("https://random-word-api.herokuapp.com/word")
  .then((wordArr) => {
    const randomWord = wordArr[0];
    console.log(randomWord);

    return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomWord}`)
  })
  
  .then((books) => {
    const bookCategory = books.items[0].volumeInfo.categories[0]
    return bookCategory;
  })
  .catch(() => console.log("no book found"));
};

getRendomWordBook();