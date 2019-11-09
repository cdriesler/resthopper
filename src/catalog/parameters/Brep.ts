import ResthopperParameter from './../../models/ResthopperParameter';

export class BrepParam extends ResthopperParameter {

	public guid: string = "919e146f-30ae-4aae-be34-4d72f555e7da";
	public name: string = "Brep";
	public nickName: string = "Brep"
	public description: string = "Contains a collection of Breps (Boundary REPresentations)"
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