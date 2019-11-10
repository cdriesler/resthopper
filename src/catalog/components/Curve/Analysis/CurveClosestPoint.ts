import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveClosestPoint extends ResthopperComponent {

	public guid: string = "2dc44b22-b1dd-460a-a704-6462d6e91096";
	public name: string = "CurveClosestPoint";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Point_P": CurveClosestPointInput_Point_P,
		"Curve_C": CurveClosestPointInput_Curve_C,
	}

	public output:
	{
		"Point_P": CurveClosestPointOutput_Point_P,
		"Parameter_t": CurveClosestPointOutput_Parameter_t,
		"Distance_D": CurveClosestPointOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new CurveClosestPointInput_Point_P(),
			"Curve_C": new CurveClosestPointInput_Curve_C(),
		}
		this.output = {
			"Point_P": new CurveClosestPointOutput_Point_P(),
			"Parameter_t": new CurveClosestPointOutput_Parameter_t(),
			"Distance_D": new CurveClosestPointOutput_Distance_D(),
		}
	}

}

class CurveClosestPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointOutput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
