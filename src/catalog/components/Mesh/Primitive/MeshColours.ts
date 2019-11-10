import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshColours extends ResthopperComponent {

	public guid: string = "d2cedf38-1149-4adc-8dbf-b06571cb5106";
	public name: string = "MeshColours";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Assign a repeating colour pattern to a mesh object.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshColoursInput_Mesh_M,
		"Colours_C": MeshColoursInput_Colours_C,
	}

	public output:
	{
		"Mesh_M": MeshColoursOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshColoursInput_Mesh_M(),
			"Colours_C": new MeshColoursInput_Colours_C(),
		}
		this.output = {
			"Mesh_M": new MeshColoursOutput_Mesh_M(),
		}
	}

}

class MeshColoursInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshColoursInput_Colours_C extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshColoursOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
