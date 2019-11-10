import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KinkyCurve extends ResthopperComponent {

	public guid: string = "6f0993e8-5f2f-4fc0-bd73-b84bc240e78e";
	public name: string = "KinkyCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct an interpolated curve through a set of points with a kink angle threshold.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": KinkyCurveInput_Vertices_V,
		"Degree_D": KinkyCurveInput_Degree_D,
		"Angle_A": KinkyCurveInput_Angle_A,
	}

	public output:
	{
		"Curve_C": KinkyCurveOutput_Curve_C,
		"Length_L": KinkyCurveOutput_Length_L,
		"Domain_D": KinkyCurveOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new KinkyCurveInput_Vertices_V(),
			"Degree_D": new KinkyCurveInput_Degree_D(),
			"Angle_A": new KinkyCurveInput_Angle_A(),
		}
		this.output = {
			"Curve_C": new KinkyCurveOutput_Curve_C(),
			"Length_L": new KinkyCurveOutput_Length_L(),
			"Domain_D": new KinkyCurveOutput_Domain_D(),
		}
	}

}

class KinkyCurveInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
