import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideCurve extends ResthopperComponent {

	public guid: string = "2162e72e-72fc-4bf8-9459-d4d82fa8aa14";
	public name: string = "DivideCurve";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into equal length segments";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": DivideCurveInput_Curve_C,
		"Count_N": DivideCurveInput_Count_N,
		"Kinks_K": DivideCurveInput_Kinks_K,
	}

	public output:
	{
		"Points_P": DivideCurveOutput_Points_P,
		"Tangents_T": DivideCurveOutput_Tangents_T,
		"Parameters_t": DivideCurveOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DivideCurveInput_Curve_C(),
			"Count_N": new DivideCurveInput_Count_N(),
			"Kinks_K": new DivideCurveInput_Kinks_K(),
		}
		this.output = {
			"Points_P": new DivideCurveOutput_Points_P(),
			"Tangents_T": new DivideCurveOutput_Tangents_T(),
			"Parameters_t": new DivideCurveOutput_Parameters_t(),
		}
	}

}

class DivideCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveInput_Kinks_K extends ResthopperParameter {

	public name: string = "Kinks";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveOutput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
