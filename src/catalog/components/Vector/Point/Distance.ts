import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Distance extends ResthopperComponent {

	public guid: string = "93b8e93d-f932-402c-b435-84be04d87666";
	public name: string = "Distance";
	public nickName: string = "Dist";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Compute Euclidean distance between two point coordinates.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"pointa_a": DistanceInput_pointa_a,
		"pointb_b": DistanceInput_pointb_b,
	}

	public output:
	{
		"distance_d": DistanceOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new DistanceInput_pointa_a(),
			"pointb_b": new DistanceInput_pointb_b(),
		}
		this.output = {
			"distance_d": new DistanceOutput_distance_d(),
		}
	}

}

class DistanceInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DistanceInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DistanceOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
