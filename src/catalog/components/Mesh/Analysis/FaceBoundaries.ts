import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceBoundaries extends ResthopperComponent {

	public guid: string = "0b4ac802-fc4a-4201-9c66-0078b837c1eb";
	public name: string = "FaceBoundaries";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Convert all mesh faces to polylines";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": FaceBoundariesInput_Mesh_M,
	}

	public output:
	{
		"Boundaries_B": FaceBoundariesOutput_Boundaries_B,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new FaceBoundariesInput_Mesh_M(),
		}
		this.output = {
			"Boundaries_B": new FaceBoundariesOutput_Boundaries_B(),
		}
	}

}

class FaceBoundariesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceBoundariesOutput_Boundaries_B extends ResthopperParameter {

	public name: string = "Boundaries";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
