import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateField extends ResthopperComponent {

	public guid: string = "a7c9f738-f8bd-4f64-8e7f-33341183e493";
	public name: string = "EvaluateField";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Evaluate a field at a point";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Field_F": EvaluateFieldInput_Field_F,
		"Point_P": EvaluateFieldInput_Point_P,
	}

	public output:
	{
		"Tensor_T": EvaluateFieldOutput_Tensor_T,
		"Strength_S": EvaluateFieldOutput_Strength_S,
	}

	constructor() {
		super();
		this.input = {
			"Field_F": new EvaluateFieldInput_Field_F(),
			"Point_P": new EvaluateFieldInput_Point_P(),
		}
		this.output = {
			"Tensor_T": new EvaluateFieldOutput_Tensor_T(),
			"Strength_S": new EvaluateFieldOutput_Strength_S(),
		}
	}

}

class EvaluateFieldInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateFieldInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateFieldOutput_Tensor_T extends ResthopperParameter {

	public name: string = "Tensor";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateFieldOutput_Strength_S extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
