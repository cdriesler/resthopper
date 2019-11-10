import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlurNumbers extends ResthopperComponent {

	public guid: string = "57e1d392-e3fb-4de9-be98-982854a92351";
	public name: string = "BlurNumbers";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Blur a list of numbers by averaging neighbours";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Numbers_N": BlurNumbersInput_Numbers_N,
		"Strength_S": BlurNumbersInput_Strength_S,
		"Iterations_I": BlurNumbersInput_Iterations_I,
		"Lock_L": BlurNumbersInput_Lock_L,
		"Wrap_W": BlurNumbersInput_Wrap_W,
	}

	public output:
	{
		"Numbers_N": BlurNumbersOutput_Numbers_N,
	}

	constructor() {
		super();
		this.input = {
			"Numbers_N": new BlurNumbersInput_Numbers_N(),
			"Strength_S": new BlurNumbersInput_Strength_S(),
			"Iterations_I": new BlurNumbersInput_Iterations_I(),
			"Lock_L": new BlurNumbersInput_Lock_L(),
			"Wrap_W": new BlurNumbersInput_Wrap_W(),
		}
		this.output = {
			"Numbers_N": new BlurNumbersOutput_Numbers_N(),
		}
	}

}

class BlurNumbersInput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_Strength_S extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_Iterations_I extends ResthopperParameter {

	public name: string = "Iterations";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_Lock_L extends ResthopperParameter {

	public name: string = "Lock";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersOutput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
