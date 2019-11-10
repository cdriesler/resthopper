import ResthopperParameter from './../../models/ResthopperParameter';

export class CircleParam extends ResthopperParameter {

	public guid: string = "d1028c72-ff86-4057-9eb0-36c687a4d98c";
	public name: string = "Circle";
	public nickName: string = "Circle"
	public description: string = "Contains a collection of circles"
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