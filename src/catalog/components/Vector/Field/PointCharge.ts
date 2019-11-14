import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointCharge extends ResthopperComponent {

	public guid: string = "cffdbaf3-8d33-4b38-9cad-c264af9fc3f4";
	public name: string = "PointCharge";
	public nickName: string = "PCharge";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a point charge";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"point_p": PointChargeInput_point_p,
		"charge_c": PointChargeInput_charge_c,
		"decay_d": PointChargeInput_decay_d,
		"bounds_b": PointChargeInput_bounds_b,
	}

	public output:
	{
		"field_f": PointChargeOutput_field_f,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new PointChargeInput_point_p(),
			"charge_c": new PointChargeInput_charge_c(),
			"decay_d": new PointChargeInput_decay_d(),
			"bounds_b": new PointChargeInput_bounds_b(),
		}
		this.output = {
			"field_f": new PointChargeOutput_field_f(),
		}
	}

}

class PointChargeInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeInput_charge_c extends ResthopperParameter {

	public name: string = "Charge";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeInput_decay_d extends ResthopperParameter {

	public name: string = "Decay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeInput_bounds_b extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointChargeOutput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
