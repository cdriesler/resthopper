import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateBox extends ResthopperComponent {

	public guid: string = "13b40e9c-3aed-4669-b2e8-60bd02091421";
	public name: string = "EvaluateBox";
	public nickName: string = "Box";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a box in normalised {UVW} space.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"box_b": EvaluateBoxInput_box_b,
		"uparameter_u": EvaluateBoxInput_uparameter_u,
		"vparameter_v": EvaluateBoxInput_vparameter_v,
		"wparameter_w": EvaluateBoxInput_wparameter_w,
	}

	public output:
	{
		"plane_pl": EvaluateBoxOutput_plane_pl,
		"point_pt": EvaluateBoxOutput_point_pt,
		"include_i": EvaluateBoxOutput_include_i,
	}

	constructor() {
		super();
		this.input = {
			"box_b": new EvaluateBoxInput_box_b(),
			"uparameter_u": new EvaluateBoxInput_uparameter_u(),
			"vparameter_v": new EvaluateBoxInput_vparameter_v(),
			"wparameter_w": new EvaluateBoxInput_wparameter_w(),
		}
		this.output = {
			"plane_pl": new EvaluateBoxOutput_plane_pl(),
			"point_pt": new EvaluateBoxOutput_point_pt(),
			"include_i": new EvaluateBoxOutput_include_i(),
		}
	}

}

class EvaluateBoxInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxInput_uparameter_u extends ResthopperParameter {

	public name: string = "Uparameter";
	public nickName: string = "U";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxInput_vparameter_v extends ResthopperParameter {

	public name: string = "Vparameter";
	public nickName: string = "V";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxInput_wparameter_w extends ResthopperParameter {

	public name: string = "Wparameter";
	public nickName: string = "W";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxOutput_point_pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxOutput_include_i extends ResthopperParameter {

	public name: string = "Include";
	public nickName: string = "I";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
