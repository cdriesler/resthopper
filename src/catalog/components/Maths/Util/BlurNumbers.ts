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
		"numbers_n": BlurNumbersInput_numbers_n,
		"strength_s": BlurNumbersInput_strength_s,
		"iterations_i": BlurNumbersInput_iterations_i,
		"lock_l": BlurNumbersInput_lock_l,
		"wrap_w": BlurNumbersInput_wrap_w,
	}

	public output:
	{
		"numbers_n": BlurNumbersOutput_numbers_n,
	}

	constructor() {
		super();
		this.input = {
			"numbers_n": new BlurNumbersInput_numbers_n(),
			"strength_s": new BlurNumbersInput_strength_s(),
			"iterations_i": new BlurNumbersInput_iterations_i(),
			"lock_l": new BlurNumbersInput_lock_l(),
			"wrap_w": new BlurNumbersInput_wrap_w(),
		}
		this.output = {
			"numbers_n": new BlurNumbersOutput_numbers_n(),
		}
	}

}

class BlurNumbersInput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_strength_s extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_iterations_i extends ResthopperParameter {

	public name: string = "Iterations";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_lock_l extends ResthopperParameter {

	public name: string = "Lock";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurNumbersOutput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
