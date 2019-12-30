import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepClosestPoint extends ResthopperComponent {

	public guid: string = "4beead95-8aa2-4613-8bb9-24758a0f5c4c";
	public name: string = "Brep Closest Point";
	public nickName: string = "BrepCP";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a brep";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"point_p": BrepClosestPointInput_point_p,
		"brep_b": BrepClosestPointInput_brep_b,
	}

	public output:
	{
		"point_p": BrepClosestPointOutput_point_p,
		"normal_n": BrepClosestPointOutput_normal_n,
		"distance_d": BrepClosestPointOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new BrepClosestPointInput_point_p(),
			"brep_b": new BrepClosestPointInput_brep_b(),
		}
		this.output = {
			"point_p": new BrepClosestPointOutput_point_p(),
			"normal_n": new BrepClosestPointOutput_normal_n(),
			"distance_d": new BrepClosestPointOutput_distance_d(),
		}
	}

}

class BrepClosestPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Sample point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Base Brep"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Closest point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointOutput_normal_n extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public description: string = "Normal direction at closest point"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Distance between sample point and Brep"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
