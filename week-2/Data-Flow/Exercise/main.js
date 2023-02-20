let posts = [
  { name: "almog", text: "hello" },
  { name: "or", text: "shalom" },
];

const render = function () {
  for (let post of posts) {
    $("body").append(`<div>${post.name}: ${post.text}</div>`);
  }
};

$("body").on("click", "button", function () {
  const name = $("#name").val();
  const text = $("#text").val();

  const newPost = {};
  newPost["name"] = name;
  newPost["text"] = text;
  posts.push(newPost);

  $('div').empty();

  render();
});

$("body").on("click", "div", function () {

    let postText = $(this).text()
    let nameOfPost = postText.split(':').shift() // remove from string the : and forward 

    for(let postIndex in posts){

        if(nameOfPost == posts[postIndex].name){
            posts.splice(postIndex , 1)
        }
    }

    $('div').empty();

    render();
  });
