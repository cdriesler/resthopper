import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshfromSubD extends ResthopperComponent {

	public guid: string = "c0b3c6e9-d05d-4c51-a0df-1ce2678c7a33";
	public name: string = "MeshfromSubD";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Get the approximation mesh of a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"SubD_S": MeshfromSubDInput_SubD_S,
		"Density_D": MeshfromSubDInput_Density_D,
	}

	public output:
	{
		"Mesh_M": MeshfromSubDOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"SubD_S": new MeshfromSubDInput_SubD_S(),
			"Density_D": new MeshfromSubDInput_Density_D(),
		}
		this.output = {
			"Mesh_M": new MeshfromSubDOutput_Mesh_M(),
		}
	}

}

class MeshfromSubDInput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshfromSubDInput_Density_D extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshfromSubDOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
