import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetCurve extends ResthopperComponent {

	public guid: string = "1a38d325-98de-455c-93f1-bca431bc1243";
	public name: string = "OffsetCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a curve with a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Corners_C": OffsetCurveInput_Corners_C,
		"Distance_D": OffsetCurveInput_Distance_D,
		"Plane_P": OffsetCurveInput_Plane_P,
	}

	public output:
	{
		"Curve_C": OffsetCurveOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Corners_C": new OffsetCurveInput_Corners_C(),
			"Distance_D": new OffsetCurveInput_Distance_D(),
			"Plane_P": new OffsetCurveInput_Plane_P(),
		}
		this.output = {
			"Curve_C": new OffsetCurveOutput_Curve_C(),
		}
	}

}

class OffsetCurveInput_Corners_C extends ResthopperParameter {

	public name: string = "Corners";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
