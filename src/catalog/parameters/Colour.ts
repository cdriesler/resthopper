import ResthopperParameter from './../../models/ResthopperParameter';

export class ColourParam extends ResthopperParameter {

	public guid: string = "203a91c3-287a-43b6-a9c5-ebb96240a650";
	public name: string = "Colour";
	public nickName: string = "Col"
	public description: string = "Contains a collection of RGB colours"
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