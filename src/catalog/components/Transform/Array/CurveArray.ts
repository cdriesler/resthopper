import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveArray extends ResthopperComponent {

	public guid: string = "c6f23658-617f-4ac8-916d-d0d9e7241b25";
	public name: string = "CurveArray";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create an array of geometry along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": CurveArrayInput_Geometry_G,
		"Curve_C": CurveArrayInput_Curve_C,
		"Count_N": CurveArrayInput_Count_N,
	}

	public output:
	{
		"Geometry_G": CurveArrayOutput_Geometry_G,
		"Transform_X": CurveArrayOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new CurveArrayInput_Geometry_G(),
			"Curve_C": new CurveArrayInput_Curve_C(),
			"Count_N": new CurveArrayInput_Count_N(),
		}
		this.output = {
			"Geometry_G": new CurveArrayOutput_Geometry_G(),
			"Transform_X": new CurveArrayOutput_Transform_X(),
		}
	}

}

class CurveArrayInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveArrayInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveArrayInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveArrayOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveArrayOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
