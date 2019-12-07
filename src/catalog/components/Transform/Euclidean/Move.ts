import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Move extends ResthopperComponent {

	public guid: string = "e9eb1dcf-92f6-4d4d-84ae-96222d60f56b";
	public name: string = "Move";
	public nickName: string = "Move";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object along a vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MoveInput_geometry_g,
		"motion_t": MoveInput_motion_t,
	}

	public output:
	{
		"geometry_g": MoveOutput_geometry_g,
		"transform_x": MoveOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MoveInput_geometry_g(),
			"motion_t": new MoveInput_motion_t(),
		}
		this.output = {
			"geometry_g": new MoveOutput_geometry_g(),
			"transform_x": new MoveOutput_transform_x(),
		}
	}

}

class MoveInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveInput_motion_t extends ResthopperParameter {

	public name: string = "Motion";
	public nickName: string = "T";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
