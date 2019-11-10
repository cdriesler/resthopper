import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSpray extends ResthopperComponent {

	public guid: string = "edcf10e1-02a0-48a4-ae2d-70c50d903dc8";
	public name: string = "MeshSpray";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Assign colours to a mesh based on spray points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshSprayInput_Mesh_M,
		"Points_P": MeshSprayInput_Points_P,
		"Colours_C": MeshSprayInput_Colours_C,
	}

	public output:
	{
		"Mesh_M": MeshSprayOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshSprayInput_Mesh_M(),
			"Points_P": new MeshSprayInput_Points_P(),
			"Colours_C": new MeshSprayInput_Colours_C(),
		}
		this.output = {
			"Mesh_M": new MeshSprayOutput_Mesh_M(),
		}
	}

}

class MeshSprayInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSprayInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSprayInput_Colours_C extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSprayOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
