
// interface InterfaceAnimal {
//     race: string,
//     color: string,
//     legs: number,
//     pet?() :void,
//     feed?() :void
// }

// class Animal implements InterfaceAnimal {
//     race: string;
//     color: string;
//     legs: number;
//     pet?() : void;
//     feed?() :void;

//     constructor(race :string, color :string, legs :number){
//         this.race = race;
//         this.color = color;
//         this.legs = legs;

//         this.pet = () => {
//             if (this.legs !== 4)
//                 throw new Error('pet() - Only for 4-legged animals');
//             console.log(`You can pet this ${this.race}`);
//         };
//         if (color === 'black')
//             this.feed = () => console.log(`You can feed this ${this.race}`);
//     }

//     photo(){
//         console.log("Let's take photo of", this.race);
//     }

//     toString(){
//         console.log("Animal:", {race: this.race, color: this.color, legs: this.legs});
//     }
// }


// // CLASS CAT
// class Cat extends Animal {
//     constructor(race: string, color: string){
//         super(race, color, 4);
//     }

//     meow(){
//         console.log("meoooowwww");
//     }
// }

// // CLASS DOG
// class Dog extends Animal {
//     constructor (race : string, color : string){
//         super(race, color, 4);
//     }

//     bark(){
//         console.log("waffwafff");
//     }
// }

// // CLASS BIRD
// class Bird extends Animal {
//     constructor (race : string, color : string){
//         super(race, color, 2);
//     }
//     fly(){
//         console.log(`Let's flying`);
//     }
// }

// // CLASS FISH
// class Fish extends Animal {
//     constructor (race : string, color : string){
//         super(race, color, 0);
//     }
//     swim(){
//         console.log(`Let's swimming`);
//     }
// }



// //  TEST
// const cat = new Cat("Chat eu", "black");
// cat.pet();
// cat.meow();
// cat.toString();

// const dog = new Animal("chien", 'marron', 4);
// dog.toString();
// dog.photo();
// dog.pet();

// const fish = new Animal("fish", 'black', 0);
// fish.toString();
// fish.photo();
// fish.feed();
// fish.pet();



