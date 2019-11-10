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

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": CurveNearestObjectInput_Curve_C,
		"Geometry_G": CurveNearestObjectInput_Geometry_G,
	}

	public output:
	{
		"PointA_A": CurveNearestObjectOutput_PointA_A,
		"PointB_B": CurveNearestObjectOutput_PointB_B,
		"Index_I": CurveNearestObjectOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveNearestObjectInput_Curve_C(),
			"Geometry_G": new CurveNearestObjectInput_Geometry_G(),
		}
		this.output = {
			"PointA_A": new CurveNearestObjectOutput_PointA_A(),
			"PointB_B": new CurveNearestObjectOutput_PointB_B(),
			"Index_I": new CurveNearestObjectOutput_Index_I(),
		}
	}

}

class CurveNearestObjectInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectOutput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectOutput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveNearestObjectOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
