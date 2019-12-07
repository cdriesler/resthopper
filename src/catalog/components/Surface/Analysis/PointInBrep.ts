import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInBrep extends ResthopperComponent {

	public guid: string = "e03561f8-0e66-41d3-afde-62049f152443";
	public name: string = "PointInBrep";
	public nickName: string = "BrepInc";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a point is inside a closed brep";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": PointInBrepInput_brep_b,
		"point_p": PointInBrepInput_point_p,
		"strict_s": PointInBrepInput_strict_s,
	}

	public output:
	{
		"inside_i": PointInBrepOutput_inside_i,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new PointInBrepInput_brep_b(),
			"point_p": new PointInBrepInput_point_p(),
			"strict_s": new PointInBrepInput_strict_s(),
		}
		this.output = {
			"inside_i": new PointInBrepOutput_inside_i(),
		}
	}

}

class PointInBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepInput_strict_s extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInBrepOutput_inside_i extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "I";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
