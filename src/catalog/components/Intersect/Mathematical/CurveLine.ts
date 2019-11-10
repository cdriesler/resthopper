import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveLine extends ResthopperComponent {

	public guid: string = "0e3173b6-91c6-4845-a748-e45d4fdbc262";
	public name: string = "CurveLine";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a curve and a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": CurveLineInput_Curve_C,
		"Line_L": CurveLineInput_Line_L,
	}

	public output:
	{
		"Points_P": CurveLineOutput_Points_P,
		"Params_t": CurveLineOutput_Params_t,
		"Count_N": CurveLineOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveLineInput_Curve_C(),
			"Line_L": new CurveLineInput_Line_L(),
		}
		this.output = {
			"Points_P": new CurveLineOutput_Points_P(),
			"Params_t": new CurveLineOutput_Params_t(),
			"Count_N": new CurveLineOutput_Count_N(),
		}
	}

}

class CurveLineInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveLineInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveLineOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveLineOutput_Params_t extends ResthopperParameter {

	public name: string = "Params";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveLineOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
