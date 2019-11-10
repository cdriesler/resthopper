import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveNearestObject extends ResthopperComponent {

	public guid: string = "748f214a-bc64-4556-9da5-4fa59a30c5c7";
	public name: string = "CurveNearestObject";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the object nearest to a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveNearestObjectInput_curve_c,
		"geometry_g": CurveNearestObjectInput_geometry_g,
	}

	public output:
	{
		"pointa_a": CurveNearestObjectOutput_pointa_a,
		"pointb_b": CurveNearestObjectOutput_pointb_b,
		"index_i": CurveNearestObjectOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveNearestObjectInput_curve_c(),
			"geometry_g": new CurveNearestObjectInput_geometry_g(),
		}
		this.output = {
			"pointa_a": new CurveNearestObjectOutput_pointa_a(),
			"pointb_b": new CurveNearestObjectOutput_pointb_b(),
			"index_i": new CurveNearestObjectOutput_index_i(),
		}
	}

}

class CurveNearestObjectInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectOutput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectOutput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
