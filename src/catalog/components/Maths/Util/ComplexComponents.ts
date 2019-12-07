import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexComponents extends ResthopperComponent {

	public guid: string = "1f384257-b26b-4160-a6d3-1dcd89b64acd";
	public name: string = "ComplexComponents";
	public nickName: string = "Complex";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Extract the Real and Imaginary components from a complex number";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"complex_c": ComplexComponentsInput_complex_c,
	}

	public output:
	{
		"real_r": ComplexComponentsOutput_real_r,
		"imaginary_i": ComplexComponentsOutput_imaginary_i,
	}

	constructor() {
		super();
		this.input = {
			"complex_c": new ComplexComponentsInput_complex_c(),
		}
		this.output = {
			"real_r": new ComplexComponentsOutput_real_r(),
			"imaginary_i": new ComplexComponentsOutput_imaginary_i(),
		}
	}

}

class ComplexComponentsInput_complex_c extends ResthopperParameter {

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

class ComplexComponentsOutput_real_r extends ResthopperParameter {

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

class ComplexComponentsOutput_imaginary_i extends ResthopperParameter {

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
