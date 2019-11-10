import ResthopperParameter from './../../models/ResthopperParameter';

export class TimeParam extends ResthopperParameter {

	public guid: string = "81dfff08-0c83-4f1b-a358-14791d642d9e";
	public name: string = "Time";
	public nickName: string = "Time"
	public description: string = "Contains a collection of times and dates"
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