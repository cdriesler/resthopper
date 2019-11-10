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
		"field_f": EvaluateFieldInput_field_f,
		"point_p": EvaluateFieldInput_point_p,
	}

	public output:
	{
		"tensor_t": EvaluateFieldOutput_tensor_t,
		"strength_s": EvaluateFieldOutput_strength_s,
	}

	constructor() {
		super();
		this.input = {
			"field_f": new EvaluateFieldInput_field_f(),
			"point_p": new EvaluateFieldInput_point_p(),
		}
		this.output = {
			"tensor_t": new EvaluateFieldOutput_tensor_t(),
			"strength_s": new EvaluateFieldOutput_strength_s(),
		}
	}

}

class EvaluateFieldInput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateFieldInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateFieldOutput_tensor_t extends ResthopperParameter {

	public name: string = "Tensor";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateFieldOutput_strength_s extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
