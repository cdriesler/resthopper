import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundarySurfaces extends ResthopperComponent {

	public guid: string = "d51e9b65-aa4e-4fd6-976c-cef35d421d05";
	public name: string = "BoundarySurfaces";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create planar surfaces from a collection of boundary edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Edges_E": BoundarySurfacesInput_Edges_E,
	}

	public output:
	{
		"Surfaces_S": BoundarySurfacesOutput_Surfaces_S,
	}

	constructor() {
		super();
		this.input = {
			"Edges_E": new BoundarySurfacesInput_Edges_E(),
		}
		this.output = {
			"Surfaces_S": new BoundarySurfacesOutput_Surfaces_S(),
		}
	}

}

class BoundarySurfacesInput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundarySurfacesOutput_Surfaces_S extends ResthopperParameter {

	public name: string = "Surfaces";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
