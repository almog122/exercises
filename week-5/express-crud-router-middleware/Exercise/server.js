const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

wordCounter = { hello: 5 , hlo: 5  , helo: 7  , lo: 4  };

const port = 3000;
app.listen(port, function () {
  console.log(`Server is up and running`);
});

app.get("/sanity", function (req, res) {
  res.send("Server is up and running");
});

app.get("/word/:word", function (req, res) {
  let word = req.params.word;
  word = word.replace(/[^A-Za-z]+/g, '')

  res.send({ count: wordCounter[word] || 0 });
});

app.post("/word", function (req, res) {
  let word = req.body.word;
  word = word.replace(/[^A-Za-z]+/g, '')

  if (wordCounter[word] === undefined) {
    wordCounter[word] = 1;
  } else {
    wordCounter[word]++;
  }

  res.send({ text: `Added ${word}`, currentCount: wordCounter[word] });
});

app.post("/sentence", function (req, res) {
  let wordArr = req.body.sentence.split(" ");
  wordArr.forEach(w => w = w.replace(/[^A-Za-z]+/g, ''))
  let numNewWords = 0;
  let numOldWords = 0;

  wordArr.forEach((word) => {
    if (wordCounter[word] === undefined) {
      wordCounter[word] = 1;
      numNewWords++;
    } else {
      wordCounter[word]++;
      numOldWords++;
    }
  });

  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

app.delete("/word/:word", function (req, res) {
  let word = req.params.word;
  word = word.replace(/[^A-Za-z]+/g, '')

  if (wordCounter[word] === undefined) {
    return res.status(404).send("word not found");
  } else {
    delete wordCounter[word]
    return res.status(204).send(`deleted the word ${word} from the wordCounter`);
  }
});

app.get("/popularWord", function (req, res) {
  let wordArr = Object.keys(wordCounter)
  let mostPopularWord = wordArr[0]
  
  for(word of wordArr){
    if(wordCounter[mostPopularWord] < wordCounter[word]){
      mostPopularWord = word
    }
  }

  res.send({ text: `${mostPopularWord}`, count: wordCounter[mostPopularWord]});
});
