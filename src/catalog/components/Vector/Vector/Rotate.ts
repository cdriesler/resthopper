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
		"Vector_V": RotateInput_Vector_V,
		"Axis_X": RotateInput_Axis_X,
		"Angle_A": RotateInput_Angle_A,
	}

	public output:
	{
		"Vector_V": RotateOutput_Vector_V,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new RotateInput_Vector_V(),
			"Axis_X": new RotateInput_Axis_X(),
			"Angle_A": new RotateInput_Angle_A(),
		}
		this.output = {
			"Vector_V": new RotateOutput_Vector_V(),
		}
	}

}

class RotateInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_Axis_X extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
