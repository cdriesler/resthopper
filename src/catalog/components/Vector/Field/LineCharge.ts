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

	public library: string = "Field Components";

	public input:
	{
		"Line_L": LineChargeInput_Line_L,
		"Charge_C": LineChargeInput_Charge_C,
		"Bounds_B": LineChargeInput_Bounds_B,
	}

	public output:
	{
		"Field_F": LineChargeOutput_Field_F,
	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LineChargeInput_Line_L(),
			"Charge_C": new LineChargeInput_Charge_C(),
			"Bounds_B": new LineChargeInput_Bounds_B(),
		}
		this.output = {
			"Field_F": new LineChargeOutput_Field_F(),
		}
	}

}

class LineChargeInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineChargeInput_Charge_C extends ResthopperParameter {

	public name: string = "Charge";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineChargeInput_Bounds_B extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineChargeOutput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
