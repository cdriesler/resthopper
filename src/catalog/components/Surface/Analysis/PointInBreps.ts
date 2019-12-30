import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInBreps extends ResthopperComponent {

	public guid: string = "859daa86-3ab7-49cb-9eda-f2811c984070";
	public name: string = "Point In Breps";
	public nickName: string = "BrepsInc";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a point is inside a collection of closed breps";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": PointInBrepsInput_brep_b,
		"point_p": PointInBrepsInput_point_p,
		"strict_s": PointInBrepsInput_strict_s,
	}

	public output:
	{
		"inside_i": PointInBrepsOutput_inside_i,
		"index_i": PointInBrepsOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new PointInBrepsInput_brep_b(),
			"point_p": new PointInBrepsInput_point_p(),
			"strict_s": new PointInBrepsInput_strict_s(),
		}
		this.output = {
			"inside_i": new PointInBrepsOutput_inside_i(),
			"index_i": new PointInBrepsOutput_index_i(),
		}
	}

}

class PointInBrepsInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Breps for inclusion test"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Point for inclusion test"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsInput_strict_s extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public description: string = "If true, then the inclusion is strict"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsOutput_inside_i extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "I";
	public description: string = "True if point is on the inside at least one of the Breps."
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepsOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public description: string = "Index of first brep that contains the point, or -1"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
