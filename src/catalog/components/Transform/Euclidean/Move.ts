import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Move extends ResthopperComponent {

	public guid: string = "e9eb1dcf-92f6-4d4d-84ae-96222d60f56b";
	public name: string = "Move";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object along a vector.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MoveInput_Geometry_G,
		"Motion_T": MoveInput_Motion_T,
	}

	public output:
	{
		"Geometry_G": MoveOutput_Geometry_G,
		"Transform_X": MoveOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MoveInput_Geometry_G(),
			"Motion_T": new MoveInput_Motion_T(),
		}
		this.output = {
			"Geometry_G": new MoveOutput_Geometry_G(),
			"Transform_X": new MoveOutput_Transform_X(),
		}
	}

}

class MoveInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveInput_Motion_T extends ResthopperParameter {

	public name: string = "Motion";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
