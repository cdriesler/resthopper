import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Barycentric extends ResthopperComponent {

	public guid: string = "9adffd61-f5d1-4e9e-9572-e8d9145730dc";
	public name: string = "Barycentric";
	public nickName: string = "BCentric";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from barycentric {u,v,w} coordinates";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"pointa_a": BarycentricInput_pointa_a,
		"pointb_b": BarycentricInput_pointb_b,
		"pointc_c": BarycentricInput_pointc_c,
		"coordinateu_u": BarycentricInput_coordinateu_u,
		"coordinatev_v": BarycentricInput_coordinatev_v,
		"coordinatew_w": BarycentricInput_coordinatew_w,
	}

	public output:
	{
		"point_p": BarycentricOutput_point_p,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new BarycentricInput_pointa_a(),
			"pointb_b": new BarycentricInput_pointb_b(),
			"pointc_c": new BarycentricInput_pointc_c(),
			"coordinateu_u": new BarycentricInput_coordinateu_u(),
			"coordinatev_v": new BarycentricInput_coordinatev_v(),
			"coordinatew_w": new BarycentricInput_coordinatew_w(),
		}
		this.output = {
			"point_p": new BarycentricOutput_point_p(),
		}
	}

}

class BarycentricInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "First anchor point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Second anchor point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public description: string = "Third anchor point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_coordinateu_u extends ResthopperParameter {

	public name: string = "CoordinateU";
	public nickName: string = "U";
	public description: string = "First barycentric coordinate"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_coordinatev_v extends ResthopperParameter {

	public name: string = "CoordinateV";
	public nickName: string = "V";
	public description: string = "Second barycentric coordinate"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_coordinatew_w extends ResthopperParameter {

	public name: string = "CoordinateW";
	public nickName: string = "W";
	public description: string = "Third barycentric coordinate"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Barycentric point coordinate"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
