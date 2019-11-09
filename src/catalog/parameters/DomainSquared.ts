import ResthopperParameter from './../../models/ResthopperParameter';

export class DomainSquaredParam extends ResthopperParameter {

	public guid: string = "90744326-eb53-4a0e-b7ef-4b45f5473d6e";
	public name: string = "DomainSquared";
	public nickName: string = "Domain²"
	public description: string = "Contains a collection of 2D number domains"
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