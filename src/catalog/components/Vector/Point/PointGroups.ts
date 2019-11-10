import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointGroups extends ResthopperComponent {

	public guid: string = "81f6afc9-22d9-49f0-8579-1fd7e0df6fa6";
	public name: string = "PointGroups";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create groups from nearby points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Points_P": PointGroupsInput_Points_P,
		"Distance_D": PointGroupsInput_Distance_D,
	}

	public output:
	{
		"Groups_G": PointGroupsOutput_Groups_G,
		"Indices_I": PointGroupsOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new PointGroupsInput_Points_P(),
			"Distance_D": new PointGroupsInput_Distance_D(),
		}
		this.output = {
			"Groups_G": new PointGroupsOutput_Groups_G(),
			"Indices_I": new PointGroupsOutput_Indices_I(),
		}
	}

}

class PointGroupsInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointGroupsInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointGroupsOutput_Groups_G extends ResthopperParameter {

	public name: string = "Groups";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointGroupsOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
