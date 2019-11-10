import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BezierSpan extends ResthopperComponent {

	public guid: string = "30ce59ce-22a1-49ee-9e21-e6d16b3684a8";
	public name: string = "BezierSpan";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a bezier span from endpoints and tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Startpoint_A": BezierSpanInput_Startpoint_A,
		"Starttangent_At": BezierSpanInput_Starttangent_At,
		"Endpoint_B": BezierSpanInput_Endpoint_B,
		"Endtangent_Bt": BezierSpanInput_Endtangent_Bt,
	}

	public output:
	{
		"Curve_C": BezierSpanOutput_Curve_C,
		"Length_L": BezierSpanOutput_Length_L,
		"Domain_D": BezierSpanOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Startpoint_A": new BezierSpanInput_Startpoint_A(),
			"Starttangent_At": new BezierSpanInput_Starttangent_At(),
			"Endpoint_B": new BezierSpanInput_Endpoint_B(),
			"Endtangent_Bt": new BezierSpanInput_Endtangent_Bt(),
		}
		this.output = {
			"Curve_C": new BezierSpanOutput_Curve_C(),
			"Length_L": new BezierSpanOutput_Length_L(),
			"Domain_D": new BezierSpanOutput_Domain_D(),
		}
	}

}

class BezierSpanInput_Startpoint_A extends ResthopperParameter {

	public name: string = "Startpoint";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanInput_Starttangent_At extends ResthopperParameter {

	public name: string = "Starttangent";
	public nickName: string = "At";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanInput_Endpoint_B extends ResthopperParameter {

	public name: string = "Endpoint";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanInput_Endtangent_Bt extends ResthopperParameter {

	public name: string = "Endtangent";
	public nickName: string = "Bt";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
