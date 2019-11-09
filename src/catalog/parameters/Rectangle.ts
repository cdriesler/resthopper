import ResthopperParameter from './../../models/ResthopperParameter';

export class RectangleParam extends ResthopperParameter {

	public guid: string = "abf9c670-5462-4cd8-acb3-f1ab0256dbf3";
	public name: string = "Rectangle";
	public nickName: string = "Rec"
	public description: string = "Contains a collection of rectangles"
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