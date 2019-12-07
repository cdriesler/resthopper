import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KnotVector extends ResthopperComponent {

	public guid: string = "846470bd-4918-4d00-9388-7e022b2cba73";
	public name: string = "KnotVector";
	public nickName: string = "Knots";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve knot vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"count_n": KnotVectorInput_count_n,
		"degree_d": KnotVectorInput_degree_d,
		"periodic_p": KnotVectorInput_periodic_p,
	}

	public output:
	{
		"knots_k": KnotVectorOutput_knots_k,
	}

	constructor() {
		super();
		this.input = {
			"count_n": new KnotVectorInput_count_n(),
			"degree_d": new KnotVectorInput_degree_d(),
			"periodic_p": new KnotVectorInput_periodic_p(),
		}
		this.output = {
			"knots_k": new KnotVectorOutput_knots_k(),
		}
	}

}

class KnotVectorInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KnotVectorInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KnotVectorInput_periodic_p extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KnotVectorOutput_knots_k extends ResthopperParameter {

	public name: string = "Knots";
	public nickName: string = "K";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
