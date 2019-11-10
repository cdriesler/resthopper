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
		"mesh_m": MeshColoursInput_mesh_m,
		"colours_c": MeshColoursInput_colours_c,
	}

	public output:
	{
		"mesh_m": MeshColoursOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshColoursInput_mesh_m(),
			"colours_c": new MeshColoursInput_colours_c(),
		}
		this.output = {
			"mesh_m": new MeshColoursOutput_mesh_m(),
		}
	}

}

class MeshColoursInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshColoursInput_colours_c extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshColoursOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
