import ResthopperParameter from './../../models/ResthopperParameter';

export class TextParam extends ResthopperParameter {

	public guid: string = "3ede854e-c753-40eb-84cb-b48008f14fd4";
	public name: string = "Text";
	public nickName: string = "Txt"
	public description: string = "Contains a collection of text fragments"
	public isOptional: boolean = false;
	public typeName: string = ""

	public isUserInput: boolean = false;
	public isUserOutput: boolean = false;

	public sources: string[] = [];
	public values: any[] = []

	constructor(value?: any) {
		super();
		this.values = [value!] ?? [];
	}

}