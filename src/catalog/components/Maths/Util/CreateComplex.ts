import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CreateComplex extends ResthopperComponent {

	public guid: string = "63d12974-2915-4ccf-ac26-5d566c3bac92";
	public name: string = "CreateComplex";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Create a complex number from a Real and an Imaginary component";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Real_R": CreateComplexInput_Real_R,
		"Imaginary_i": CreateComplexInput_Imaginary_i,
	}

	public output:
	{
		"Complex_C": CreateComplexOutput_Complex_C,
	}

	constructor() {
		super();
		this.input = {
			"Real_R": new CreateComplexInput_Real_R(),
			"Imaginary_i": new CreateComplexInput_Imaginary_i(),
		}
		this.output = {
			"Complex_C": new CreateComplexOutput_Complex_C(),
		}
	}

}

class CreateComplexInput_Real_R extends ResthopperParameter {

	public name: string = "Real";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateComplexInput_Imaginary_i extends ResthopperParameter {

	public name: string = "Imaginary";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateComplexOutput_Complex_C extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
