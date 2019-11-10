import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexModulus extends ResthopperComponent {

	public guid: string = "88fb33f9-f467-452b-a0e3-44bdb78a9b06";
	public name: string = "ComplexModulus";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Get the modulus of a Complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Complex_C": ComplexModulusInput_Complex_C,
	}

	public output:
	{
		"Modulus_M": ComplexModulusOutput_Modulus_M,
	}

	constructor() {
		super();
		this.input = {
			"Complex_C": new ComplexModulusInput_Complex_C(),
		}
		this.output = {
			"Modulus_M": new ComplexModulusOutput_Modulus_M(),
		}
	}

}

class ComplexModulusInput_Complex_C extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexModulusOutput_Modulus_M extends ResthopperParameter {

	public name: string = "Modulus";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
