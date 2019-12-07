import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveArray extends ResthopperComponent {

	public guid: string = "c6f23658-617f-4ac8-916d-d0d9e7241b25";
	public name: string = "CurveArray";
	public nickName: string = "ArrCurve";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create an array of geometry along a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": CurveArrayInput_geometry_g,
		"curve_c": CurveArrayInput_curve_c,
		"count_n": CurveArrayInput_count_n,
	}

	public output:
	{
		"geometry_g": CurveArrayOutput_geometry_g,
		"transform_x": CurveArrayOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new CurveArrayInput_geometry_g(),
			"curve_c": new CurveArrayInput_curve_c(),
			"count_n": new CurveArrayInput_count_n(),
		}
		this.output = {
			"geometry_g": new CurveArrayOutput_geometry_g(),
			"transform_x": new CurveArrayOutput_transform_x(),
		}
	}

}

class CurveArrayInput_geometry_g extends ResthopperParameter {

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

class CurveArrayInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveArrayInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveArrayOutput_geometry_g extends ResthopperParameter {

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

class CurveArrayOutput_transform_x extends ResthopperParameter {

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
