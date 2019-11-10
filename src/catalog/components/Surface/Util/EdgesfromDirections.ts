import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromDirections extends ResthopperComponent {

	public guid: string = "64ff9813-8fe8-4708-ac9f-61b825213e83";
	public name: string = "EdgesfromDirections";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on edge direction";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"brep_b": EdgesfromDirectionsInput_brep_b,
		"directions_d": EdgesfromDirectionsInput_directions_d,
		"reflex_r": EdgesfromDirectionsInput_reflex_r,
		"angle_a": EdgesfromDirectionsInput_angle_a,
	}

	public output:
	{
		"edges_e": EdgesfromDirectionsOutput_edges_e,
		"indices_i": EdgesfromDirectionsOutput_indices_i,
		"map_m": EdgesfromDirectionsOutput_map_m,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new EdgesfromDirectionsInput_brep_b(),
			"directions_d": new EdgesfromDirectionsInput_directions_d(),
			"reflex_r": new EdgesfromDirectionsInput_reflex_r(),
			"angle_a": new EdgesfromDirectionsInput_angle_a(),
		}
		this.output = {
			"edges_e": new EdgesfromDirectionsOutput_edges_e(),
			"indices_i": new EdgesfromDirectionsOutput_indices_i(),
			"map_m": new EdgesfromDirectionsOutput_map_m(),
		}
	}

}

class EdgesfromDirectionsInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsInput_directions_d extends ResthopperParameter {

	public name: string = "Directions";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsInput_reflex_r extends ResthopperParameter {

	public name: string = "Reflex";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsOutput_map_m extends ResthopperParameter {

	public name: string = "Map";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
