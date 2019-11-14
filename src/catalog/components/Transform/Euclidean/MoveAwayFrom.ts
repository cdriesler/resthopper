import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MoveAwayFrom extends ResthopperComponent {

	public guid: string = "dd9f597a-4db0-42b1-9cb2-5607ec97db09";
	public name: string = "MoveAwayFrom";
	public nickName: string = "MoveAway";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object away from another object.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MoveAwayFromInput_geometry_g,
		"emitter_e": MoveAwayFromInput_emitter_e,
		"distance_d": MoveAwayFromInput_distance_d,
	}

	public output:
	{
		"geometry_g": MoveAwayFromOutput_geometry_g,
		"transform_x": MoveAwayFromOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MoveAwayFromInput_geometry_g(),
			"emitter_e": new MoveAwayFromInput_emitter_e(),
			"distance_d": new MoveAwayFromInput_distance_d(),
		}
		this.output = {
			"geometry_g": new MoveAwayFromOutput_geometry_g(),
			"transform_x": new MoveAwayFromOutput_transform_x(),
		}
	}

}

class MoveAwayFromInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromInput_emitter_e extends ResthopperParameter {

	public name: string = "Emitter";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
