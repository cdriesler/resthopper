import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ClosestPoints extends ResthopperComponent {

	public guid: string = "446014c4-c11c-45a7-8839-c45dc60950d6";
	public name: string = "ClosestPoints";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Find closest points in a point collection.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": ClosestPointsInput_point_p,
		"cloud_c": ClosestPointsInput_cloud_c,
		"count_n": ClosestPointsInput_count_n,
	}

	public output:
	{
		"closestpoint_p": ClosestPointsOutput_closestpoint_p,
		"cpindex_i": ClosestPointsOutput_cpindex_i,
		"distance_d": ClosestPointsOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new ClosestPointsInput_point_p(),
			"cloud_c": new ClosestPointsInput_cloud_c(),
			"count_n": new ClosestPointsInput_count_n(),
		}
		this.output = {
			"closestpoint_p": new ClosestPointsOutput_closestpoint_p(),
			"cpindex_i": new ClosestPointsOutput_cpindex_i(),
			"distance_d": new ClosestPointsOutput_distance_d(),
		}
	}

}

class ClosestPointsInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsInput_cloud_c extends ResthopperParameter {

	public name: string = "Cloud";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsOutput_closestpoint_p extends ResthopperParameter {

	public name: string = "ClosestPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsOutput_cpindex_i extends ResthopperParameter {

	public name: string = "CPIndex";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
