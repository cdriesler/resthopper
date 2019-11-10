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

	public library: string = "Field Components";

	public input:
	{
		"Field_F": FieldLineInput_Field_F,
		"Point_P": FieldLineInput_Point_P,
		"Steps_N": FieldLineInput_Steps_N,
		"Accuracy_A": FieldLineInput_Accuracy_A,
		"Method_M": FieldLineInput_Method_M,
	}

	public output:
	{
		"Curve_C": FieldLineOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Field_F": new FieldLineInput_Field_F(),
			"Point_P": new FieldLineInput_Point_P(),
			"Steps_N": new FieldLineInput_Steps_N(),
			"Accuracy_A": new FieldLineInput_Accuracy_A(),
			"Method_M": new FieldLineInput_Method_M(),
		}
		this.output = {
			"Curve_C": new FieldLineOutput_Curve_C(),
		}
	}

}

class FieldLineInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_Steps_N extends ResthopperParameter {

	public name: string = "Steps";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_Accuracy_A extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineInput_Method_M extends ResthopperParameter {

	public name: string = "Method";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FieldLineOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
