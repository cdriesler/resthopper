import ResthopperParameter from './../../models/ResthopperParameter';

export class IntegerParam extends ResthopperParameter {

	public guid: string = "2e3ab970-8545-46bb-836c-1c11e5610bce";
	public name: string = "Integer";
	public nickName: string = "Int"
	public description: string = "Contains a collection of integer numbers"
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