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
		"edges_e": BoundarySurfacesInput_edges_e,
	}

	public output:
	{
		"surfaces_s": BoundarySurfacesOutput_surfaces_s,
	}

	constructor() {
		super();
		this.input = {
			"edges_e": new BoundarySurfacesInput_edges_e(),
		}
		this.output = {
			"surfaces_s": new BoundarySurfacesOutput_surfaces_s(),
		}
	}

}

class BoundarySurfacesInput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundarySurfacesOutput_surfaces_s extends ResthopperParameter {

	public name: string = "Surfaces";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
