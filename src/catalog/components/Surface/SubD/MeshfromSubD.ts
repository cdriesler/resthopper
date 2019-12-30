import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshfromSubD extends ResthopperComponent {

	public guid: string = "c0b3c6e9-d05d-4c51-a0df-1ce2678c7a33";
	public name: string = "Mesh from Sub-D";
	public nickName: string = "MeshSubD";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Get the approximation mesh of a Sub-D surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"subd_s": MeshfromSubDInput_subd_s,
		"density_d": MeshfromSubDInput_density_d,
	}

	public output:
	{
		"mesh_m": MeshfromSubDOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"subd_s": new MeshfromSubDInput_subd_s(),
			"density_d": new MeshfromSubDInput_density_d(),
		}
		this.output = {
			"mesh_m": new MeshfromSubDOutput_mesh_m(),
		}
	}

}

class MeshfromSubDInput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public description: string = "Subdivision surface"
	public isOptional: boolean = false;
	public typeName: string = "SubD"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshfromSubDInput_density_d extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public description: string = "Subdivision density"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshfromSubDOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Mesh approximation"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
