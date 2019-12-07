import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MoveToPlane extends ResthopperComponent {

	public guid: string = "4fe87ef8-49e4-4605-9859-87940d62e1de";
	public name: string = "MoveToPlane";
	public nickName: string = "MoveToPlane";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object onto a plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MoveToPlaneInput_geometry_g,
		"plane_p": MoveToPlaneInput_plane_p,
		"above_a": MoveToPlaneInput_above_a,
		"below_b": MoveToPlaneInput_below_b,
	}

	public output:
	{
		"geometry_g": MoveToPlaneOutput_geometry_g,
		"transform_x": MoveToPlaneOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MoveToPlaneInput_geometry_g(),
			"plane_p": new MoveToPlaneInput_plane_p(),
			"above_a": new MoveToPlaneInput_above_a(),
			"below_b": new MoveToPlaneInput_below_b(),
		}
		this.output = {
			"geometry_g": new MoveToPlaneOutput_geometry_g(),
			"transform_x": new MoveToPlaneOutput_transform_x(),
		}
	}

}

class MoveToPlaneInput_geometry_g extends ResthopperParameter {

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

class MoveToPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneInput_above_a extends ResthopperParameter {

	public name: string = "Above";
	public nickName: string = "A";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneInput_below_b extends ResthopperParameter {

	public name: string = "Below";
	public nickName: string = "B";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MoveToPlaneOutput_geometry_g extends ResthopperParameter {

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

class MoveToPlaneOutput_transform_x extends ResthopperParameter {

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
