import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NurbsCurve extends ResthopperComponent {

	public guid: string = "dde71aef-d6ed-40a6-af98-6b0673983c82";
	public name: string = "NurbsCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve from control points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": NurbsCurveInput_Vertices_V,
		"Degree_D": NurbsCurveInput_Degree_D,
		"Periodic_P": NurbsCurveInput_Periodic_P,
	}

	public output:
	{
		"Curve_C": NurbsCurveOutput_Curve_C,
		"Length_L": NurbsCurveOutput_Length_L,
		"Domain_D": NurbsCurveOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new NurbsCurveInput_Vertices_V(),
			"Degree_D": new NurbsCurveInput_Degree_D(),
			"Periodic_P": new NurbsCurveInput_Periodic_P(),
		}
		this.output = {
			"Curve_C": new NurbsCurveOutput_Curve_C(),
			"Length_L": new NurbsCurveOutput_Length_L(),
			"Domain_D": new NurbsCurveOutput_Domain_D(),
		}
	}

}

class NurbsCurveInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveInput_Periodic_P extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
