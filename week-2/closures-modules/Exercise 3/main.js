const SongsManager = function(){


    const addSong  =  function(name , url){

        let shortUrl = url.replace("https://www.youtube.com/watch?v=" , "")

        songs[name] = shortUrl;
    };

    const getSong = (name) => "https://www.youtube.com/watch?v=" + songs[name];

    const songs = {};

    return{
        addSong: addSong ,
        getSong : getSong

    }
  }


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ