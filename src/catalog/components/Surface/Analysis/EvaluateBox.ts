import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateBox extends ResthopperComponent {

	public guid: string = "13b40e9c-3aed-4669-b2e8-60bd02091421";
	public name: string = "EvaluateBox";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a box in normalised {UVW} space.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Box_B": EvaluateBoxInput_Box_B,
		"Uparameter_U": EvaluateBoxInput_Uparameter_U,
		"Vparameter_V": EvaluateBoxInput_Vparameter_V,
		"Wparameter_W": EvaluateBoxInput_Wparameter_W,
	}

	public output:
	{
		"Plane_Pl": EvaluateBoxOutput_Plane_Pl,
		"Point_Pt": EvaluateBoxOutput_Point_Pt,
		"Include_I": EvaluateBoxOutput_Include_I,
	}

	constructor() {
		super();
		this.input = {
			"Box_B": new EvaluateBoxInput_Box_B(),
			"Uparameter_U": new EvaluateBoxInput_Uparameter_U(),
			"Vparameter_V": new EvaluateBoxInput_Vparameter_V(),
			"Wparameter_W": new EvaluateBoxInput_Wparameter_W(),
		}
		this.output = {
			"Plane_Pl": new EvaluateBoxOutput_Plane_Pl(),
			"Point_Pt": new EvaluateBoxOutput_Point_Pt(),
			"Include_I": new EvaluateBoxOutput_Include_I(),
		}
	}

}

class EvaluateBoxInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxInput_Uparameter_U extends ResthopperParameter {

	public name: string = "Uparameter";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxInput_Vparameter_V extends ResthopperParameter {

	public name: string = "Vparameter";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxInput_Wparameter_W extends ResthopperParameter {

	public name: string = "Wparameter";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxOutput_Point_Pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateBoxOutput_Include_I extends ResthopperParameter {

	public name: string = "Include";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
