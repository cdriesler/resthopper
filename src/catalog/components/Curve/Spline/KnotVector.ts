import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KnotVector extends ResthopperComponent {

	public guid: string = "846470bd-4918-4d00-9388-7e022b2cba73";
	public name: string = "KnotVector";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve knot vector.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Count_N": KnotVectorInput_Count_N,
		"Degree_D": KnotVectorInput_Degree_D,
		"Periodic_P": KnotVectorInput_Periodic_P,
	}

	public output:
	{
		"Knots_K": KnotVectorOutput_Knots_K,
	}

	constructor() {
		super();
		this.input = {
			"Count_N": new KnotVectorInput_Count_N(),
			"Degree_D": new KnotVectorInput_Degree_D(),
			"Periodic_P": new KnotVectorInput_Periodic_P(),
		}
		this.output = {
			"Knots_K": new KnotVectorOutput_Knots_K(),
		}
	}

}

class KnotVectorInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KnotVectorInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KnotVectorInput_Periodic_P extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KnotVectorOutput_Knots_K extends ResthopperParameter {

	public name: string = "Knots";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
