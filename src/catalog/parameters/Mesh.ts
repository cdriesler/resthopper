import ResthopperParameter from './../../models/ResthopperParameter';

export class MeshParam extends ResthopperParameter {

	public guid: string = "1e936df3-0eea-4246-8549-514cb8862b7a";
	public name: string = "Mesh";
	public nickName: string = "Mesh"
	public description: string = "Contains a collection of polygon meshes"
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