const fetch = function (ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (books) {
      
      console.log(books.items)  
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

fetch(9782806269171)

fetch(1440633908)

fetch(9781945048470)

fetch(9780307417138)