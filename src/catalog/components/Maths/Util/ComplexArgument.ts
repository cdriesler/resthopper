import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexArgument extends ResthopperComponent {

	public guid: string = "be715e4c-d6d8-447b-a9c3-6fea700d0b83";
	public name: string = "Complex Argument";
	public nickName: string = "Arg";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Get the argument of a Complex number";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"complex_c": ComplexArgumentInput_complex_c,
	}

	public output:
	{
		"argument_a": ComplexArgumentOutput_argument_a,
	}

	constructor() {
		super();
		this.input = {
			"complex_c": new ComplexArgumentInput_complex_c(),
		}
		this.output = {
			"argument_a": new ComplexArgumentOutput_argument_a(),
		}
	}

}

class ComplexArgumentInput_complex_c extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public description: string = "Complex number"
	public isOptional: boolean = false;
	public typeName: string = "Complex"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexArgumentOutput_argument_a extends ResthopperParameter {

	public name: string = "Argument";
	public nickName: string = "A";
	public description: string = "Argument of the Complex number [C]"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
