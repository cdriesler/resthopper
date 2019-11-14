import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleCNR extends ResthopperComponent {

	public guid: string = "d114323a-e6ee-4164-946b-e4ca0ce15efa";
	public name: string = "CircleCNR";
	public nickName: string = "Circle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by center, normal and radius.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"center_c": CircleCNRInput_center_c,
		"normal_n": CircleCNRInput_normal_n,
		"radius_r": CircleCNRInput_radius_r,
	}

	public output:
	{
		"circle_c": CircleCNROutput_circle_c,
	}

	constructor() {
		super();
		this.input = {
			"center_c": new CircleCNRInput_center_c(),
			"normal_n": new CircleCNRInput_normal_n(),
			"radius_r": new CircleCNRInput_radius_r(),
		}
		this.output = {
			"circle_c": new CircleCNROutput_circle_c(),
		}
	}

}

class CircleCNRInput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleCNRInput_normal_n extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleCNRInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleCNROutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
