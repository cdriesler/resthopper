import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NurbsCurvePWK extends ResthopperComponent {

	public guid: string = "1f8e1ff7-8278-4421-b39d-350e71d85d37";
	public name: string = "NurbsCurvePWK";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve from control points, weights and knots.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Points_P": NurbsCurvePWKInput_Points_P,
		"Weights_W": NurbsCurvePWKInput_Weights_W,
		"Knots_K": NurbsCurvePWKInput_Knots_K,
	}

	public output:
	{
		"Curve_C": NurbsCurvePWKOutput_Curve_C,
		"Length_L": NurbsCurvePWKOutput_Length_L,
		"Domain_D": NurbsCurvePWKOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new NurbsCurvePWKInput_Points_P(),
			"Weights_W": new NurbsCurvePWKInput_Weights_W(),
			"Knots_K": new NurbsCurvePWKInput_Knots_K(),
		}
		this.output = {
			"Curve_C": new NurbsCurvePWKOutput_Curve_C(),
			"Length_L": new NurbsCurvePWKOutput_Length_L(),
			"Domain_D": new NurbsCurvePWKOutput_Domain_D(),
		}
	}

}

class NurbsCurvePWKInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKInput_Weights_W extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKInput_Knots_K extends ResthopperParameter {

	public name: string = "Knots";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
