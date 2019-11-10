import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PullPoint extends ResthopperComponent {

	public guid: string = "902289da-28dc-454b-98d4-b8f8aa234516";
	public name: string = "PullPoint";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Pull a point to a variety of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Point_P": PullPointInput_Point_P,
		"Geometry_G": PullPointInput_Geometry_G,
	}

	public output:
	{
		"ClosestPoint_P": PullPointOutput_ClosestPoint_P,
		"Distance_D": PullPointOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new PullPointInput_Point_P(),
			"Geometry_G": new PullPointInput_Geometry_G(),
		}
		this.output = {
			"ClosestPoint_P": new PullPointOutput_ClosestPoint_P(),
			"Distance_D": new PullPointOutput_Distance_D(),
		}
	}

}

class PullPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullPointInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullPointOutput_ClosestPoint_P extends ResthopperParameter {

	public name: string = "ClosestPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullPointOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
