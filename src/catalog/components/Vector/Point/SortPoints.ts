import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortPoints extends ResthopperComponent {

	public guid: string = "4e86ba36-05e2-4cc0-a0f5-3ad57c91f04e";
	public name: string = "SortPoints";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Sort points by Euclidean coordinates (first x, then y, then z)";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Points_P": SortPointsInput_Points_P,
	}

	public output:
	{
		"Points_P": SortPointsOutput_Points_P,
		"Indices_I": SortPointsOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new SortPointsInput_Points_P(),
		}
		this.output = {
			"Points_P": new SortPointsOutput_Points_P(),
			"Indices_I": new SortPointsOutput_Indices_I(),
		}
	}

}

class SortPointsInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortPointsOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortPointsOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
