import ResthopperParameter from './../../models/ResthopperParameter';

export class ComplexParam extends ResthopperParameter {

	public guid: string = "476c0cf8-bc3c-4f1c-a61a-6e91e1f8b91e";
	public name: string = "Complex";
	public nickName: string = "C"
	public description: string = "Contains a collection of complex numbers"
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