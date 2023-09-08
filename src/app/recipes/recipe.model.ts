export class Recipe{
    public name:string;
    public desciprtion: string;
    public imagePath: string;

    constructor(name:string,description:string,imagePath:string){
        this.name=name;
        this.desciprtion=description;
        this.imagePath=imagePath;
    }
}