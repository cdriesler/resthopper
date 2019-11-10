import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MoveToPlane extends ResthopperComponent {

	public guid: string = "4fe87ef8-49e4-4605-9859-87940d62e1de";
	public name: string = "MoveToPlane";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object onto a plane.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MoveToPlaneInput_Geometry_G,
		"Plane_P": MoveToPlaneInput_Plane_P,
		"Above_A": MoveToPlaneInput_Above_A,
		"Below_B": MoveToPlaneInput_Below_B,
	}

	public output:
	{
		"Geometry_G": MoveToPlaneOutput_Geometry_G,
		"Transform_X": MoveToPlaneOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MoveToPlaneInput_Geometry_G(),
			"Plane_P": new MoveToPlaneInput_Plane_P(),
			"Above_A": new MoveToPlaneInput_Above_A(),
			"Below_B": new MoveToPlaneInput_Below_B(),
		}
		this.output = {
			"Geometry_G": new MoveToPlaneOutput_Geometry_G(),
			"Transform_X": new MoveToPlaneOutput_Transform_X(),
		}
	}

}

class MoveToPlaneInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneInput_Above_A extends ResthopperParameter {

	public name: string = "Above";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneInput_Below_B extends ResthopperParameter {

	public name: string = "Below";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
