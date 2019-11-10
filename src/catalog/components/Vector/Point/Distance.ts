import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Distance extends ResthopperComponent {

	public guid: string = "93b8e93d-f932-402c-b435-84be04d87666";
	public name: string = "Distance";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Compute Euclidean distance between two point coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"PointA_A": DistanceInput_PointA_A,
		"PointB_B": DistanceInput_PointB_B,
	}

	public output:
	{
		"Distance_D": DistanceOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new DistanceInput_PointA_A(),
			"PointB_B": new DistanceInput_PointB_B(),
		}
		this.output = {
			"Distance_D": new DistanceOutput_Distance_D(),
		}
	}

}

class DistanceInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DistanceInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DistanceOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
