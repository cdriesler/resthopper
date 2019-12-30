import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Reduce extends ResthopperComponent {

	public guid: string = "884646c3-0e70-4ad1-90c5-42601ee26450";
	public name: string = "Reduce";
	public nickName: string = "RedPLine";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Reduce a polyline by removing least significant vertices.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"polyline_p": ReduceInput_polyline_p,
		"tolerance_t": ReduceInput_tolerance_t,
	}

	public output:
	{
		"polyline_p": ReduceOutput_polyline_p,
		"reduction_r": ReduceOutput_reduction_r,
	}

	constructor() {
		super();
		this.input = {
			"polyline_p": new ReduceInput_polyline_p(),
			"tolerance_t": new ReduceInput_tolerance_t(),
		}
		this.output = {
			"polyline_p": new ReduceOutput_polyline_p(),
			"reduction_r": new ReduceOutput_reduction_r(),
		}
	}

}

class ReduceInput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public description: string = "Polyline to reduce"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReduceInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public description: string = "Tolerance (allowed deviation between original and reduction)"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReduceOutput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public description: string = "Reduced polyline"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReduceOutput_reduction_r extends ResthopperParameter {

	public name: string = "Reduction";
	public nickName: string = "R";
	public description: string = "Number of vertices removed during reduction"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
