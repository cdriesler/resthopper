import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Circle extends ResthopperComponent {

	public guid: string = "807b86e3-be8d-4970-92b5-f8cdcb45b06b";
	public name: string = "Circle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by base plane and radius.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": CircleInput_plane_p,
		"radius_r": CircleInput_radius_r,
	}

	public output:
	{
		"circle_c": CircleOutput_circle_c,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new CircleInput_plane_p(),
			"radius_r": new CircleInput_radius_r(),
		}
		this.output = {
			"circle_c": new CircleOutput_circle_c(),
		}
	}

}

class CircleInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleOutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
