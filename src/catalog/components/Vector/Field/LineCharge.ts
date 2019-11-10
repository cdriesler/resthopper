import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineCharge extends ResthopperComponent {

	public guid: string = "8cc9eb88-26a7-4baa-a896-13e5fc12416a";
	public name: string = "LineCharge";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a line charge";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"line_l": LineChargeInput_line_l,
		"charge_c": LineChargeInput_charge_c,
		"bounds_b": LineChargeInput_bounds_b,
	}

	public output:
	{
		"field_f": LineChargeOutput_field_f,
	}

	constructor() {
		super();
		this.input = {
			"line_l": new LineChargeInput_line_l(),
			"charge_c": new LineChargeInput_charge_c(),
			"bounds_b": new LineChargeInput_bounds_b(),
		}
		this.output = {
			"field_f": new LineChargeOutput_field_f(),
		}
	}

}

class LineChargeInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineChargeInput_charge_c extends ResthopperParameter {

	public name: string = "Charge";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineChargeInput_bounds_b extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineChargeOutput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
