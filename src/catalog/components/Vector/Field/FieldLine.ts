import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FieldLine extends ResthopperComponent {

	public guid: string = "add6be3e-c57f-4740-96e4-5680abaa9169";
	public name: string = "FieldLine";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Compute the field line through a certain point";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"field_f": FieldLineInput_field_f,
		"point_p": FieldLineInput_point_p,
		"steps_n": FieldLineInput_steps_n,
		"accuracy_a": FieldLineInput_accuracy_a,
		"method_m": FieldLineInput_method_m,
	}

	public output:
	{
		"curve_c": FieldLineOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"field_f": new FieldLineInput_field_f(),
			"point_p": new FieldLineInput_point_p(),
			"steps_n": new FieldLineInput_steps_n(),
			"accuracy_a": new FieldLineInput_accuracy_a(),
			"method_m": new FieldLineInput_method_m(),
		}
		this.output = {
			"curve_c": new FieldLineOutput_curve_c(),
		}
	}

}

class FieldLineInput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_steps_n extends ResthopperParameter {

	public name: string = "Steps";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_accuracy_a extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_method_m extends ResthopperParameter {

	public name: string = "Method";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
