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

class LinkedList{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    append(object)
    // when linked list is empty head and tail is null
    //hence first element added in the list head and tail both initially
    {
        if(this.head==null){
                this.head=object;
                this.tail=object;
            }
        else{
            this.tail.nextSong=object;
            object.previousSong=this.tail;
            this.head.previousSong=object;
            
            this.tail=object
            this.tail.nextSong=this.head;
        }
        this.length++;
    }
    iterateForward()
    {
        let temp=this.head;
        while(true){
            temp.show()
            temp=temp.nextSong
            if(temp==this.head)
            {
                break;
            }
        }
    }
    iterateBackward()
    {
        let temp=this.tail;
        while(true){
            temp.show()
            temp=temp.previousSong
            if(temp==this.tail)
            {
                break;
            }
        }
    }
    removeFirst(){
       
            }

    removeLast(){

    }

    removeSelected(obejct){
       
    }

    insertInBetween(object1, object2, objectToInsert){

    }
}


let linkedlist = new LinkedList();

let song1 = new Song("1. Kesariya","Arjit Singh",3.25)
var song2 = new Song("2. O Mere Dil Ke Chain","Kishore Kumar",5.14)
var song3 = new Song("3. Falak tu garaj tu","Ravi Basur",2.31)

linkedlist.append(song1);
linkedlist.append(song2);
linkedlist.append(song3);

linkedlist.iterateForward();
linkedlist.iterateBackward();
console.log("Length is "+linkedlist.length);
// linkedlist.removeFirst();
// linkedlist.removeSelected(song2);