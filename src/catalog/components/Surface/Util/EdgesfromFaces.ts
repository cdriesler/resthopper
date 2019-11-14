import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromFaces extends ResthopperComponent {

	public guid: string = "71e99dbb-2d79-4f02-a8a6-e87a09d54f47";
	public name: string = "EdgesfromFaces";
	public nickName: string = "EdgesFaces";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select all brep edges that delineate certain faces";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"brep_b": EdgesfromFacesInput_brep_b,
		"points_p": EdgesfromFacesInput_points_p,
	}

	public output:
	{
		"edges_e": EdgesfromFacesOutput_edges_e,
		"indices_i": EdgesfromFacesOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new EdgesfromFacesInput_brep_b(),
			"points_p": new EdgesfromFacesInput_points_p(),
		}
		this.output = {
			"edges_e": new EdgesfromFacesOutput_edges_e(),
			"indices_i": new EdgesfromFacesOutput_indices_i(),
		}
	}

}

class EdgesfromFacesInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromFacesInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromFacesOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromFacesOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
