import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CreateComplex extends ResthopperComponent {

	public guid: string = "63d12974-2915-4ccf-ac26-5d566c3bac92";
	public name: string = "Create Complex";
	public nickName: string = "Complex";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Create a complex number from a Real and an Imaginary component";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"real_r": CreateComplexInput_real_r,
		"imaginary_i": CreateComplexInput_imaginary_i,
	}

	public output:
	{
		"complex_c": CreateComplexOutput_complex_c,
	}

	constructor() {
		super();
		this.input = {
			"real_r": new CreateComplexInput_real_r(),
			"imaginary_i": new CreateComplexInput_imaginary_i(),
		}
		this.output = {
			"complex_c": new CreateComplexOutput_complex_c(),
		}
	}

}

class CreateComplexInput_real_r extends ResthopperParameter {

	public name: string = "Real";
	public nickName: string = "R";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateComplexInput_imaginary_i extends ResthopperParameter {

	public name: string = "Imaginary";
	public nickName: string = "i";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateComplexOutput_complex_c extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public description: string = "Empty Complex parameter"
	public isOptional: boolean = false;
	public typeName: string = "Complex"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
