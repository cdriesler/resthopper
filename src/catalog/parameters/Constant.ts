import ResthopperParameter from './../../models/ResthopperParameter';

export class ConstantParam extends ResthopperParameter {

	public guid: string = "4ad6703b-84cd-4957-a1b3-f1c6ec270d9c";
	public name: string = "Constant";
	public nickName: string = "constant"
	public description: string = "Define a document-wide constant for use in Expressions"
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