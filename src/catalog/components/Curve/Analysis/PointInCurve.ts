import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInCurve extends ResthopperComponent {

	public guid: string = "a72b0bd3-c7a7-458e-875d-09ae1624638c";
	public name: string = "PointInCurve";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for closed curve containment.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Point_P": PointInCurveInput_Point_P,
		"Curve_C": PointInCurveInput_Curve_C,
	}

	public output:
	{
		"Relationship_R": PointInCurveOutput_Relationship_R,
		"Point_P": PointInCurveOutput_Point_P,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new PointInCurveInput_Point_P(),
			"Curve_C": new PointInCurveInput_Curve_C(),
		}
		this.output = {
			"Relationship_R": new PointInCurveOutput_Relationship_R(),
			"Point_P": new PointInCurveOutput_Point_P(),
		}
	}

}

class PointInCurveInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInCurveOutput_Relationship_R extends ResthopperParameter {

	public name: string = "Relationship";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInCurveOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
