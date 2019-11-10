import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideByDeviation extends ResthopperComponent {

	public guid: string = "6e9c0577-ae4a-4b21-8880-0ec3daf3eb4d";
	public name: string = "DivideByDeviation";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into segments with equal deviation";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": DivideByDeviationInput_Curve_C,
		"Count_N": DivideByDeviationInput_Count_N,
	}

	public output:
	{
		"Points_P": DivideByDeviationOutput_Points_P,
		"Tangents_T": DivideByDeviationOutput_Tangents_T,
		"Parameters_t": DivideByDeviationOutput_Parameters_t,
		"Deviation_d": DivideByDeviationOutput_Deviation_d,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DivideByDeviationInput_Curve_C(),
			"Count_N": new DivideByDeviationInput_Count_N(),
		}
		this.output = {
			"Points_P": new DivideByDeviationOutput_Points_P(),
			"Tangents_T": new DivideByDeviationOutput_Tangents_T(),
			"Parameters_t": new DivideByDeviationOutput_Parameters_t(),
			"Deviation_d": new DivideByDeviationOutput_Deviation_d(),
		}
	}

}

class DivideByDeviationInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationOutput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationOutput_Deviation_d extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "d";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
