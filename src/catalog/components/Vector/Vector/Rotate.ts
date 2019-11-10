import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rotate extends ResthopperComponent {

	public guid: string = "b6d7ba20-cf74-4191-a756-2216a36e30a7";
	public name: string = "Rotate";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Rotate a vector around an axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": RotateInput_vector_v,
		"axis_x": RotateInput_axis_x,
		"angle_a": RotateInput_angle_a,
	}

	public output:
	{
		"vector_v": RotateOutput_vector_v,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new RotateInput_vector_v(),
			"axis_x": new RotateInput_axis_x(),
			"angle_a": new RotateInput_angle_a(),
		}
		this.output = {
			"vector_v": new RotateOutput_vector_v(),
		}
	}

}

class RotateInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_axis_x extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
