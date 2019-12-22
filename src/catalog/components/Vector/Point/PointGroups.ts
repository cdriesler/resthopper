import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointGroups extends ResthopperComponent {

	public guid: string = "81f6afc9-22d9-49f0-8579-1fd7e0df6fa6";
	public name: string = "Point Groups";
	public nickName: string = "PGroups";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create groups from nearby points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": PointGroupsInput_points_p,
		"distance_d": PointGroupsInput_distance_d,
	}

	public output:
	{
		"groups_g": PointGroupsOutput_groups_g,
		"indices_i": PointGroupsOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new PointGroupsInput_points_p(),
			"distance_d": new PointGroupsInput_distance_d(),
		}
		this.output = {
			"groups_g": new PointGroupsOutput_groups_g(),
			"indices_i": new PointGroupsOutput_indices_i(),
		}
	}

}

class PointGroupsInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointGroupsInput_distance_d extends ResthopperParameter {

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

class PointGroupsOutput_groups_g extends ResthopperParameter {

	public name: string = "Groups";
	public nickName: string = "G";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointGroupsOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
