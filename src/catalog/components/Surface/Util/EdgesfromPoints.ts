import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromPoints extends ResthopperComponent {

	public guid: string = "73269f6a-9645-4638-8d5e-88064dd289bd";
	public name: string = "EdgesfromPoints";
	public nickName: string = "EdgesPt";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on point coincidence";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"brep_b": EdgesfromPointsInput_brep_b,
		"points_p": EdgesfromPointsInput_points_p,
		"valence_v": EdgesfromPointsInput_valence_v,
		"tolerance_t": EdgesfromPointsInput_tolerance_t,
	}

	public output:
	{
		"edges_e": EdgesfromPointsOutput_edges_e,
		"indices_i": EdgesfromPointsOutput_indices_i,
		"map_m": EdgesfromPointsOutput_map_m,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new EdgesfromPointsInput_brep_b(),
			"points_p": new EdgesfromPointsInput_points_p(),
			"valence_v": new EdgesfromPointsInput_valence_v(),
			"tolerance_t": new EdgesfromPointsInput_tolerance_t(),
		}
		this.output = {
			"edges_e": new EdgesfromPointsOutput_edges_e(),
			"indices_i": new EdgesfromPointsOutput_indices_i(),
			"map_m": new EdgesfromPointsOutput_map_m(),
		}
	}

}

class EdgesfromPointsInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsInput_valence_v extends ResthopperParameter {

	public name: string = "Valence";
	public nickName: string = "V";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsOutput_map_m extends ResthopperParameter {

	public name: string = "Map";
	public nickName: string = "M";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
