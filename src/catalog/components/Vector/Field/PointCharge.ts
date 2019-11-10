import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointCharge extends ResthopperComponent {

	public guid: string = "cffdbaf3-8d33-4b38-9cad-c264af9fc3f4";
	public name: string = "PointCharge";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a point charge";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Point_P": PointChargeInput_Point_P,
		"Charge_C": PointChargeInput_Charge_C,
		"Decay_D": PointChargeInput_Decay_D,
		"Bounds_B": PointChargeInput_Bounds_B,
	}

	public output:
	{
		"Field_F": PointChargeOutput_Field_F,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new PointChargeInput_Point_P(),
			"Charge_C": new PointChargeInput_Charge_C(),
			"Decay_D": new PointChargeInput_Decay_D(),
			"Bounds_B": new PointChargeInput_Bounds_B(),
		}
		this.output = {
			"Field_F": new PointChargeOutput_Field_F(),
		}
	}

}

class PointChargeInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeInput_Charge_C extends ResthopperParameter {

	public name: string = "Charge";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeInput_Decay_D extends ResthopperParameter {

	public name: string = "Decay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeInput_Bounds_B extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeOutput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
