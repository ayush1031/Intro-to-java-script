// Object => Storage Container
// Class => Repersentation of Object i.e we code the structure of object

// Repersenting a song object
class Song{

    constructor(track,artist,duration)
    {
        this.track=track;
        this.artist=artist;
        this.duration=duration;
       // 2 attributes to create who is previous and who is next
        this.nextSong=null;
        this.previousSong=null;
    }

    show()
    {
        console.log("~~~~~~~~~~~");
        console.log(this.track+" - "+this.artist);
        console.log("Duration is "+this.duration);
        console.log("~~~~~~~~~~~")
    }
}

let song1 = new Song("Kesariya","Arjit Singh",3.25)
var song2 = new Song("O Mere Dil Ke Chain","Kishore Kumar",5.14)
var song3 = new Song("Falak tu garaj tu","Ravi Basur",2.31)

/*
song1.show();
song2.show();
song3.show();
*/

//HardCOde Linking 
song1.nextSong=song2;
song2.nextSong=song3;
song3.nextSong=song1;

song1.previousSong=song3
song2.previousSong=song1
song3.previousSong=song2

// Forward Iteration
console.log("Iterating Forward");
let temp=song1;
while(true)
{
    temp.show();
    temp = temp.nextSong;

    if(temp==song1)
    {
        break;
    }
}

// Backward Iteration
console.log("Iterating Backward");
let temp1=song3;
while(true)
{
    temp1.show();
    temp1=temp1.previousSong;

    if(temp1==song3)
    {
        break;
    }
}