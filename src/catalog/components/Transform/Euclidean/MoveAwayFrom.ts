import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MoveAwayFrom extends ResthopperComponent {

	public guid: string = "dd9f597a-4db0-42b1-9cb2-5607ec97db09";
	public name: string = "MoveAwayFrom";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object away from another object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MoveAwayFromInput_Geometry_G,
		"Emitter_E": MoveAwayFromInput_Emitter_E,
		"Distance_D": MoveAwayFromInput_Distance_D,
	}

	public output:
	{
		"Geometry_G": MoveAwayFromOutput_Geometry_G,
		"Transform_X": MoveAwayFromOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MoveAwayFromInput_Geometry_G(),
			"Emitter_E": new MoveAwayFromInput_Emitter_E(),
			"Distance_D": new MoveAwayFromInput_Distance_D(),
		}
		this.output = {
			"Geometry_G": new MoveAwayFromOutput_Geometry_G(),
			"Transform_X": new MoveAwayFromOutput_Transform_X(),
		}
	}

}

class MoveAwayFromInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromInput_Emitter_E extends ResthopperParameter {

	public name: string = "Emitter";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveAwayFromOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
