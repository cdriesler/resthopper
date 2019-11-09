import ResthopperParameter from 'src/models/ResthopperParameter';

export class Number extends ResthopperParameter {
    public guid: string = "3e8ca6be-fda8-4aaf-b5c0-3c54c8bb7312";
    public name: string = "Number";
    public nickName: string = "Number";
    public description: string = "";
    public isOptional: boolean = false;
    public typeName: string = "";

    public isUserInput: boolean = false;
    public isUserOutput: boolean = false;

    public sources: string[] = [];
    public values: string[] | number[] | boolean[] = [];
}