import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexArgument extends ResthopperComponent {

	public guid: string = "be715e4c-d6d8-447b-a9c3-6fea700d0b83";
	public name: string = "ComplexArgument";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Get the argument of a Complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Complex_C": ComplexArgumentInput_Complex_C,
	}

	public output:
	{
		"Argument_A": ComplexArgumentOutput_Argument_A,
	}

	constructor() {
		super();
		this.input = {
			"Complex_C": new ComplexArgumentInput_Complex_C(),
		}
		this.output = {
			"Argument_A": new ComplexArgumentOutput_Argument_A(),
		}
	}

}

class ComplexArgumentInput_Complex_C extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexArgumentOutput_Argument_A extends ResthopperParameter {

	public name: string = "Argument";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
