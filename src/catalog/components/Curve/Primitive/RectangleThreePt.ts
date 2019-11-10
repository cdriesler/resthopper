import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleThreePt extends ResthopperComponent {

	public guid: string = "9bc98a1d-2ecc-407e-948a-09a09ed3e69d";
	public name: string = "Rectangle3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle from three points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"pointa_a": RectangleThreePtInput_pointa_a,
		"pointb_b": RectangleThreePtInput_pointb_b,
		"pointc_c": RectangleThreePtInput_pointc_c,
	}

	public output:
	{
		"rectangle_r": RectangleThreePtOutput_rectangle_r,
		"length_l": RectangleThreePtOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new RectangleThreePtInput_pointa_a(),
			"pointb_b": new RectangleThreePtInput_pointb_b(),
			"pointc_c": new RectangleThreePtInput_pointc_c(),
		}
		this.output = {
			"rectangle_r": new RectangleThreePtOutput_rectangle_r(),
			"length_l": new RectangleThreePtOutput_length_l(),
		}
	}

}

class RectangleThreePtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtOutput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
