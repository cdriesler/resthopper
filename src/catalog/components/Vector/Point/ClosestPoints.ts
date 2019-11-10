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

	public library: string = "Vector Components";

	public input:
	{
		"Point_P": ClosestPointsInput_Point_P,
		"Cloud_C": ClosestPointsInput_Cloud_C,
		"Count_N": ClosestPointsInput_Count_N,
	}

	public output:
	{
		"ClosestPoint_P": ClosestPointsOutput_ClosestPoint_P,
		"CPIndex_i": ClosestPointsOutput_CPIndex_i,
		"Distance_D": ClosestPointsOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new ClosestPointsInput_Point_P(),
			"Cloud_C": new ClosestPointsInput_Cloud_C(),
			"Count_N": new ClosestPointsInput_Count_N(),
		}
		this.output = {
			"ClosestPoint_P": new ClosestPointsOutput_ClosestPoint_P(),
			"CPIndex_i": new ClosestPointsOutput_CPIndex_i(),
			"Distance_D": new ClosestPointsOutput_Distance_D(),
		}
	}

}

class ClosestPointsInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsInput_Cloud_C extends ResthopperParameter {

	public name: string = "Cloud";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsOutput_ClosestPoint_P extends ResthopperParameter {

	public name: string = "ClosestPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsOutput_CPIndex_i extends ResthopperParameter {

	public name: string = "CPIndex";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointsOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
