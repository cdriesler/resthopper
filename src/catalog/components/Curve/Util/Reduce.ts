import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Reduce extends ResthopperComponent {

	public guid: string = "884646c3-0e70-4ad1-90c5-42601ee26450";
	public name: string = "Reduce";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Reduce a polyline by removing least significant vertices.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Polyline_P": ReduceInput_Polyline_P,
		"Tolerance_T": ReduceInput_Tolerance_T,
	}

	public output:
	{
		"Polyline_P": ReduceOutput_Polyline_P,
		"Reduction_R": ReduceOutput_Reduction_R,
	}

	constructor() {
		super();
		this.input = {
			"Polyline_P": new ReduceInput_Polyline_P(),
			"Tolerance_T": new ReduceInput_Tolerance_T(),
		}
		this.output = {
			"Polyline_P": new ReduceOutput_Polyline_P(),
			"Reduction_R": new ReduceOutput_Reduction_R(),
		}
	}

}

class ReduceInput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReduceInput_Tolerance_T extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReduceOutput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReduceOutput_Reduction_R extends ResthopperParameter {

	public name: string = "Reduction";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
