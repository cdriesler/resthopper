import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Factorial extends ResthopperComponent {

	public guid: string = "a0a38131-c5fc-4984-b05d-34cf57f0c018";
	public name: string = "Factorial";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Returns the factorial of an integer.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"number_n": FactorialInput_number_n,
	}

	public output:
	{
		"factorial_f": FactorialOutput_factorial_f,
	}

	constructor() {
		super();
		this.input = {
			"number_n": new FactorialInput_number_n(),
		}
		this.output = {
			"factorial_f": new FactorialOutput_factorial_f(),
		}
	}

}

class FactorialInput_number_n extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FactorialOutput_factorial_f extends ResthopperParameter {

	public name: string = "Factorial";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
