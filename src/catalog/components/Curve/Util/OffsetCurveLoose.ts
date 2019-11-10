import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetCurveLoose extends ResthopperComponent {

	public guid: string = "80e55fc2-933b-4bfb-a353-12358786dba8";
	public name: string = "OffsetCurveLoose";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset the control-points of a curve with a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": OffsetCurveLooseInput_Curve_C,
		"Distance_D": OffsetCurveLooseInput_Distance_D,
		"Plane_P": OffsetCurveLooseInput_Plane_P,
	}

	public output:
	{
		"Curve_C": OffsetCurveLooseOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new OffsetCurveLooseInput_Curve_C(),
			"Distance_D": new OffsetCurveLooseInput_Distance_D(),
			"Plane_P": new OffsetCurveLooseInput_Plane_P(),
		}
		this.output = {
			"Curve_C": new OffsetCurveLooseOutput_Curve_C(),
		}
	}

}

class OffsetCurveLooseInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveLooseInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveLooseInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveLooseOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
