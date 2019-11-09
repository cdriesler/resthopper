import ResthopperParameter from './../../models/ResthopperParameter';

export class MeshFaceParam extends ResthopperParameter {

	public guid: string = "e02b3da5-543a-46ac-a867-0ba6b0a524de";
	public name: string = "MeshFace";
	public nickName: string = "Face"
	public description: string = "Contains a collection of triangle or quad mesh faces"
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