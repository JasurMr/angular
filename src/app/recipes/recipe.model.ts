import { Ingredent } from "../shared/ingredent.module";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredents: Ingredent[];

    constructor(name:string,desc:string, imagePath:string,
                ingredents:Ingredent[]) 
    {
     this.name = name;
     this.description = desc;
     this.imagePath = imagePath;
     this.ingredents = ingredents;
    }
}