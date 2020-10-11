
// interface InterfaceAnimal {
//     race: string,
//     color: string,
// }

// class Animal implements InterfaceAnimal {
//     race: string;
//     color: string;

//     constructor(race :string, color :string){
//         this.race = race;
//         this.color = color;
//     }

    
//     toString(){
//         console.log("Animal:", {race: this.race, color: this.color});
//     }
// }

// function photo(anim :Animal){
//     console.log("Let's take photo of", anim.race);
// }

// function feed(anim : Animal){
//     if (anim.color !== 'black')
//         throw Error('pet() - Only for 4-legged animals');
//     console.log("You can pet this " + anim.race);
// }



// // CLASS ANIMAL4LEGS

// interface InterfaceAnimal4Legs{
//     legs: number

// }

// class Animal4Legs extends Animal {
//     legs: number;

//     constructor(race: string, color: string){
//         super(race, color);
//         this.legs = 4;
//     }

//     toString(){
//         console.log("Animal4Legs:", {race: this.race, color: this.color, legs: this.legs});
//     }
// }

// function pet(anim : Animal4Legs){
//     console.log(`You can pet this ${anim.race}`)
// }



// // CLASS CAT
// class Cat extends Animal4Legs {
//     constructor(race: string, color: string){
//         super(race, color);
//     }

// }
// function meow(cat : Cat){
//     console.log("meoooowwww");
// }



// // CLASS DOG
// class Dog extends Animal4Legs {
//     constructor (race : string, color : string){
//         super(race, color);
//     }

// }
// function bark(dog : Dog){
//     console.log("waffwafff");
// }



// // CLASS BIRD

// class Bird extends Animal{
//     constructor (race : string, color : string){
//         super(race, color);
//     }
// }

// function fly(bird : Bird){
//     console.log(`Let's flying`);
// }


// // CLASS FISH
// class Fish extends Animal {
//     constructor (race : string, color : string){
//         super(race, color);
//     }
// }
// function swim(fish : Fish){
//     console.log(`${fish.race}: Let's swimming`);
// }



// //  TEST
// const cat = new Cat("Chat eu", "black");
// cat.toString();
// photo(cat);
// pet(cat);
// feed(cat);
// swim(cat);

// const dog = new Animal("chien", 'marron');

// const bird = new Bird("bird", 'black');
// pet(bird);

// // 

