import ResthopperParameter from './../../models/ResthopperParameter';

export class PlaneParam extends ResthopperParameter {

	public guid: string = "4f8984c4-7c7a-4d69-b0a2-183cbb330d20";
	public name: string = "Plane";
	public nickName: string = "Pln"
	public description: string = "Contains a collection of three-dimensional axis-systems"
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