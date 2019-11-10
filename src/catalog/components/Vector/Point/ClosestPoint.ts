import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ClosestPoint extends ResthopperComponent {

	public guid: string = "571ca323-6e55-425a-bf9e-ee103c7ba4b9";
	public name: string = "ClosestPoint";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Find closest point in a point collection.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": ClosestPointInput_point_p,
		"cloud_c": ClosestPointInput_cloud_c,
	}

	public output:
	{
		"closestpoint_p": ClosestPointOutput_closestpoint_p,
		"cpindex_i": ClosestPointOutput_cpindex_i,
		"distance_d": ClosestPointOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new ClosestPointInput_point_p(),
			"cloud_c": new ClosestPointInput_cloud_c(),
		}
		this.output = {
			"closestpoint_p": new ClosestPointOutput_closestpoint_p(),
			"cpindex_i": new ClosestPointOutput_cpindex_i(),
			"distance_d": new ClosestPointOutput_distance_d(),
		}
	}

}

class ClosestPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointInput_cloud_c extends ResthopperParameter {

	public name: string = "Cloud";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointOutput_closestpoint_p extends ResthopperParameter {

	public name: string = "ClosestPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointOutput_cpindex_i extends ResthopperParameter {

	public name: string = "CPIndex";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
