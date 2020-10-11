
export default class Demo{

    private _name: string;

    constructor(name : string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    start(){
        console.log("Demo start .....");
    }

    static explain(){
        console.log("Class to handle demo");
    }
}