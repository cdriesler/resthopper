import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentCurve extends ResthopperComponent {

	public guid: string = "f73498c5-178b-4e09-ad61-73d172fa6e56";
	public name: string = "TangentCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a curve through a set of points with tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": TangentCurveInput_Vertices_V,
		"Tangents_T": TangentCurveInput_Tangents_T,
		"Blend_B": TangentCurveInput_Blend_B,
		"Degree_D": TangentCurveInput_Degree_D,
	}

	public output:
	{
		"Curve_C": TangentCurveOutput_Curve_C,
		"Length_L": TangentCurveOutput_Length_L,
		"Domain_D": TangentCurveOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new TangentCurveInput_Vertices_V(),
			"Tangents_T": new TangentCurveInput_Tangents_T(),
			"Blend_B": new TangentCurveInput_Blend_B(),
			"Degree_D": new TangentCurveInput_Degree_D(),
		}
		this.output = {
			"Curve_C": new TangentCurveOutput_Curve_C(),
			"Length_L": new TangentCurveOutput_Length_L(),
			"Domain_D": new TangentCurveOutput_Domain_D(),
		}
	}

}

class TangentCurveInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveInput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveInput_Blend_B extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
