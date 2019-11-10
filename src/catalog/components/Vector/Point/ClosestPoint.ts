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

	public library: string = "Vector Components";

	public input:
	{
		"Point_P": ClosestPointInput_Point_P,
		"Cloud_C": ClosestPointInput_Cloud_C,
	}

	public output:
	{
		"ClosestPoint_P": ClosestPointOutput_ClosestPoint_P,
		"CPIndex_i": ClosestPointOutput_CPIndex_i,
		"Distance_D": ClosestPointOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new ClosestPointInput_Point_P(),
			"Cloud_C": new ClosestPointInput_Cloud_C(),
		}
		this.output = {
			"ClosestPoint_P": new ClosestPointOutput_ClosestPoint_P(),
			"CPIndex_i": new ClosestPointOutput_CPIndex_i(),
			"Distance_D": new ClosestPointOutput_Distance_D(),
		}
	}

}

class ClosestPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointInput_Cloud_C extends ResthopperParameter {

	public name: string = "Cloud";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointOutput_ClosestPoint_P extends ResthopperParameter {

	public name: string = "ClosestPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointOutput_CPIndex_i extends ResthopperParameter {

	public name: string = "CPIndex";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosestPointOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
