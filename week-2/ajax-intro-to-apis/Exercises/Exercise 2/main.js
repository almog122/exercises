const fetch = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (books) {
      for (let book of books.items) {
        console.log(book.volumeInfo.title);
      }
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

//fetch("title", "The Wise Man's Fears");

fetch("isbn", 1440633908);

// fetch("title", "How to Win Friends and Influence People");
