import ResthopperParameter from './../../models/ResthopperParameter';

export class VectorParam extends ResthopperParameter {

	public guid: string = "16ef3e75-e315-4899-b531-d3166b42dac9";
	public name: string = "Vector";
	public nickName: string = "Vec"
	public description: string = "Contains a collection of three-dimensional vectors"
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