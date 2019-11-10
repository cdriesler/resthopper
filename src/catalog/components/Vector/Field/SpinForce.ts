import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpinForce extends ResthopperComponent {

	public guid: string = "4b59e893-d4ee-4e31-ae24-a489611d1088";
	public name: string = "SpinForce";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a spin force";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"plane_p": SpinForceInput_plane_p,
		"strength_s": SpinForceInput_strength_s,
		"radius_r": SpinForceInput_radius_r,
		"decay_d": SpinForceInput_decay_d,
		"bounds_b": SpinForceInput_bounds_b,
	}

	public output:
	{
		"field_f": SpinForceOutput_field_f,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new SpinForceInput_plane_p(),
			"strength_s": new SpinForceInput_strength_s(),
			"radius_r": new SpinForceInput_radius_r(),
			"decay_d": new SpinForceInput_decay_d(),
			"bounds_b": new SpinForceInput_bounds_b(),
		}
		this.output = {
			"field_f": new SpinForceOutput_field_f(),
		}
	}

}

class SpinForceInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_strength_s extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_decay_d extends ResthopperParameter {

	public name: string = "Decay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_bounds_b extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceOutput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
