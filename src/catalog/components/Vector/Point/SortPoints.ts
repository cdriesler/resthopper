import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortPoints extends ResthopperComponent {

	public guid: string = "4e86ba36-05e2-4cc0-a0f5-3ad57c91f04e";
	public name: string = "Sort Points";
	public nickName: string = "SortPt";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Sort points by Euclidean coordinates (first x, then y, then z)";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": SortPointsInput_points_p,
	}

	public output:
	{
		"points_p": SortPointsOutput_points_p,
		"indices_i": SortPointsOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new SortPointsInput_points_p(),
		}
		this.output = {
			"points_p": new SortPointsOutput_points_p(),
			"indices_i": new SortPointsOutput_indices_i(),
		}
	}

}

class SortPointsInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Points to sort"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortPointsOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Sorted points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortPointsOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Point index map"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
