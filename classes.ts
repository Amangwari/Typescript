// Classes and Objects 
// -> Classes Defination
// -> Constructor
// -> this keyword
// -> Access Modifiers (public, private , protected)
// -> ReadOnly properties
// -> Optional Properties
// -> Parameter Properties
// -> Getters and setters
// -> Static members
// -> Abstract classes and methods

console.log("----CLASSES AND OBJECTS----")

class Device {
    name = "lg";
    price = "12000";
    category = "LED";
}

let d1 = new Device();
let d2 = new Device();
console.log(d1);
console.log(d2);

// class bottle
class Bottles {
    shape = "Cylinder";
    radius = "12px";
    price = "30";
}

let b1 = new Bottles()
console.log(b1);

// -> This Constructors
console.log("----Constructors----")
// class with constructor
// Example 1
class BottleMaker {
    constructor(public name: string, public price: number) {

    }
}
let Bottle = new BottleMaker("Milton", 200)

// Example 2
class HumanMaker {
    // here we defiend age = 0 as default that human age is start from 0
    // to write directly values in contructor we have to write publice else they will not define 
    age = 0
    constructor(public name: string, public ishandSome: boolean) {
        // constructor want those value which we want to set
    }
}
let Human = new HumanMaker('Aman', true)

// Example 3
class MusicMaker {
    constructor(public musicName: string, public artist: string, public minutes: number, public gerene: string, public isPremium: boolean, public hasthumbnail: string = "thumb1.jpg") { }
}


let music1 = new MusicMaker("Tum se hi", "KK", 3, "Melody", false, "")
let music2 = new MusicMaker("Bawe", "Raftaar, Badshah", 4, "Desi hip hop", true, "")
music2.artist = "halwa"

// or we can write it as well like this (old way below and above we saw the new feature in typescript) ---->
class AlbumMaker {
    public musicName;
    public artist;
    public minutes;
    public gerene;
    public isPremium;
    public isMultipleArtist;
    constructor(musicName: string, artist: string, minutes: number, gerene: string, isPremium: boolean, isMultipleArtist: boolean) {
        this.musicName = musicName;
        this.artist = artist;
        this.minutes = minutes;
        this.gerene = gerene;
        this.isPremium = isPremium;
        this.isMultipleArtist = isMultipleArtist;
    }
}

let music3 = new AlbumMaker("Tum se hi", "KK", 3, "Melody", false, false)
let music4 = new AlbumMaker("Bawe", "Raftaar, Badshah", 4, "Desi hip hop", true, true)



// -> This keyword
console.log("---THIS KEYWORD---");
class Abcd {
    name = "aman";

    changeSomeStuff() {
        console.log(this.name);
        this.changeSomeMoreStuff();
    }

    changeSomeMoreStuff() {
        console.log("hey");
        let a = "20";
        console.log(a);
    }
}

let aman = new Abcd();     // Object is created
aman.changeSomeStuff();    // Now the method is called

// -> Access Modifiers (public, private , protected)
console.log("---Access Modifiers (public, private , protected)---")

class BoxMaker {
    constructor(public name:string){}
}

let b12 = new BoxMaker("Miltion");
console.log(b12)s

    


console.log("---Access Modifiers (public, private , protected)---")