import ResthopperParameter from './../../models/ResthopperParameter';

export class LineParam extends ResthopperParameter {

	public guid: string = "8529dbdf-9b6f-42e9-8e1f-c7a2bde56a70";
	public name: string = "Line";
	public nickName: string = "Line"
	public description: string = "Contains a collection of line segments"
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