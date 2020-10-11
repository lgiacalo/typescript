var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(race, color) {
        this.race = race;
        this.color = color;
    }
    Animal.prototype.toString = function () {
        console.log("Animal:", { race: this.race, color: this.color });
    };
    return Animal;
}());
function photo(anim) {
    console.log("Let's take photo of", anim.race);
}
function feed(anim) {
    if (anim.color !== 'black')
        throw Error('pet() - Only for 4-legged animals');
    console.log("You can pet this " + anim.race);
}
var Animal4Legs = /** @class */ (function (_super) {
    __extends(Animal4Legs, _super);
    function Animal4Legs(race, color) {
        var _this = _super.call(this, race, color) || this;
        _this.legs = 4;
        return _this;
    }
    Animal4Legs.prototype.toString = function () {
        console.log("Animal4Legs:", { race: this.race, color: this.color, legs: this.legs });
    };
    return Animal4Legs;
}(Animal));
function pet(anim) {
    console.log("You can pet this " + anim.race);
}
// CLASS CAT
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(race, color) {
        return _super.call(this, race, color) || this;
    }
    return Cat;
}(Animal4Legs));
function meow(cat) {
    console.log("meoooowwww");
}
// CLASS DOG
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(race, color) {
        return _super.call(this, race, color) || this;
    }
    return Dog;
}(Animal4Legs));
function bark(dog) {
    console.log("waffwafff");
}
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(race, color) {
        return _super.call(this, race, color) || this;
    }
    return Bird;
}(Animal));
function fly(bird) {
    console.log("Let's flying");
}
// CLASS FISH
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(race, color) {
        return _super.call(this, race, color) || this;
    }
    return Fish;
}(Animal));
function swim(fish) {
    console.log(fish.race + ": Let's swimming");
}
//  TEST
var cat = new Cat("Chat eu", "black");
cat.toString();
photo(cat);
pet(cat);
feed(cat);
swim(cat);
var dog = new Animal("chien", 'marron');
var bird = new Bird("bird", 'black');
swim(bird);
