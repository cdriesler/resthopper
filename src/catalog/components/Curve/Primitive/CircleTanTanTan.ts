import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleTanTanTan extends ResthopperComponent {

	public guid: string = "dcaa922d-5491-4826-9a22-5adefa139f43";
	public name: string = "CircleTanTanTan";
	public nickName: string = "CircleTTT";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle tangent to three curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": CircleTanTanTanInput_curvea_a,
		"curveb_b": CircleTanTanTanInput_curveb_b,
		"curvec_c": CircleTanTanTanInput_curvec_c,
		"point_p": CircleTanTanTanInput_point_p,
	}

	public output:
	{
		"circle_c": CircleTanTanTanOutput_circle_c,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new CircleTanTanTanInput_curvea_a(),
			"curveb_b": new CircleTanTanTanInput_curveb_b(),
			"curvec_c": new CircleTanTanTanInput_curvec_c(),
			"point_p": new CircleTanTanTanInput_point_p(),
		}
		this.output = {
			"circle_c": new CircleTanTanTanOutput_circle_c(),
		}
	}

}

class CircleTanTanTanInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanInput_curvec_c extends ResthopperParameter {

	public name: string = "CurveC";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanOutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public description: string = "Empty Circle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
