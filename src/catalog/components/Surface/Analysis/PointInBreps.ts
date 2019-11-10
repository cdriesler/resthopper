import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInBreps extends ResthopperComponent {

	public guid: string = "859daa86-3ab7-49cb-9eda-f2811c984070";
	public name: string = "PointInBreps";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a point is inside a collection of closed breps";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": PointInBrepsInput_Brep_B,
		"Point_P": PointInBrepsInput_Point_P,
		"Strict_S": PointInBrepsInput_Strict_S,
	}

	public output:
	{
		"Inside_I": PointInBrepsOutput_Inside_I,
		"Index_i": PointInBrepsOutput_Index_i,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new PointInBrepsInput_Brep_B(),
			"Point_P": new PointInBrepsInput_Point_P(),
			"Strict_S": new PointInBrepsInput_Strict_S(),
		}
		this.output = {
			"Inside_I": new PointInBrepsOutput_Inside_I(),
			"Index_i": new PointInBrepsOutput_Index_i(),
		}
	}

}

class PointInBrepsInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsInput_Strict_S extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsOutput_Inside_I extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsOutput_Index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
