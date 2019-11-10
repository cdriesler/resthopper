import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepCurve extends ResthopperComponent {

	public guid: string = "20ef81e8-df15-4a0c-acf1-993a7607cafb";
	public name: string = "BrepCurve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for a Brep and a curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": BrepCurveInput_Brep_B,
		"Curve_C": BrepCurveInput_Curve_C,
	}

	public output:
	{
		"Curves_C": BrepCurveOutput_Curves_C,
		"Points_P": BrepCurveOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new BrepCurveInput_Brep_B(),
			"Curve_C": new BrepCurveInput_Curve_C(),
		}
		this.output = {
			"Curves_C": new BrepCurveOutput_Curves_C(),
			"Points_P": new BrepCurveOutput_Points_P(),
		}
	}

}

class BrepCurveInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepCurveOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepCurveOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
