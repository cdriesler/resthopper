import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexComponents extends ResthopperComponent {

	public guid: string = "1f384257-b26b-4160-a6d3-1dcd89b64acd";
	public name: string = "ComplexComponents";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Extract the Real and Imaginary components from a complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Complex_C": ComplexComponentsInput_Complex_C,
	}

	public output:
	{
		"Real_R": ComplexComponentsOutput_Real_R,
		"Imaginary_i": ComplexComponentsOutput_Imaginary_i,
	}

	constructor() {
		super();
		this.input = {
			"Complex_C": new ComplexComponentsInput_Complex_C(),
		}
		this.output = {
			"Real_R": new ComplexComponentsOutput_Real_R(),
			"Imaginary_i": new ComplexComponentsOutput_Imaginary_i(),
		}
	}

}

class ComplexComponentsInput_Complex_C extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexComponentsOutput_Real_R extends ResthopperParameter {

	public name: string = "Real";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexComponentsOutput_Imaginary_i extends ResthopperParameter {

	public name: string = "Imaginary";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
