import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInBrep extends ResthopperComponent {

	public guid: string = "e03561f8-0e66-41d3-afde-62049f152443";
	public name: string = "PointInBrep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a point is inside a closed brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": PointInBrepInput_Brep_B,
		"Point_P": PointInBrepInput_Point_P,
		"Strict_S": PointInBrepInput_Strict_S,
	}

	public output:
	{
		"Inside_I": PointInBrepOutput_Inside_I,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new PointInBrepInput_Brep_B(),
			"Point_P": new PointInBrepInput_Point_P(),
			"Strict_S": new PointInBrepInput_Strict_S(),
		}
		this.output = {
			"Inside_I": new PointInBrepOutput_Inside_I(),
		}
	}

}

class PointInBrepInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepInput_Strict_S extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepOutput_Inside_I extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
