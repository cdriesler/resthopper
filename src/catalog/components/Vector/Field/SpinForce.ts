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

	public library: string = "Field Components";

	public input:
	{
		"Plane_P": SpinForceInput_Plane_P,
		"Strength_S": SpinForceInput_Strength_S,
		"Radius_R": SpinForceInput_Radius_R,
		"Decay_D": SpinForceInput_Decay_D,
		"Bounds_B": SpinForceInput_Bounds_B,
	}

	public output:
	{
		"Field_F": SpinForceOutput_Field_F,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new SpinForceInput_Plane_P(),
			"Strength_S": new SpinForceInput_Strength_S(),
			"Radius_R": new SpinForceInput_Radius_R(),
			"Decay_D": new SpinForceInput_Decay_D(),
			"Bounds_B": new SpinForceInput_Bounds_B(),
		}
		this.output = {
			"Field_F": new SpinForceOutput_Field_F(),
		}
	}

}

class SpinForceInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_Strength_S extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_Decay_D extends ResthopperParameter {

	public name: string = "Decay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceInput_Bounds_B extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpinForceOutput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
