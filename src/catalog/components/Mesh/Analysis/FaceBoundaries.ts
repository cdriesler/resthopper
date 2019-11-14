import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceBoundaries extends ResthopperComponent {

	public guid: string = "0b4ac802-fc4a-4201-9c66-0078b837c1eb";
	public name: string = "FaceBoundaries";
	public nickName: string = "FaceB";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Convert all mesh faces to polylines";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": FaceBoundariesInput_mesh_m,
	}

	public output:
	{
		"boundaries_b": FaceBoundariesOutput_boundaries_b,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new FaceBoundariesInput_mesh_m(),
		}
		this.output = {
			"boundaries_b": new FaceBoundariesOutput_boundaries_b(),
		}
	}

}

class FaceBoundariesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceBoundariesOutput_boundaries_b extends ResthopperParameter {

	public name: string = "Boundaries";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
