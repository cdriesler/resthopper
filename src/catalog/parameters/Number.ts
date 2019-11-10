import ResthopperParameter from './../../models/ResthopperParameter';

export class NumberParam extends ResthopperParameter {

	public guid: string = "3e8ca6be-fda8-4aaf-b5c0-3c54c8bb7312";
	public name: string = "Number";
	public nickName: string = "Num"
	public description: string = "Contains a collection of floating point numbers"
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