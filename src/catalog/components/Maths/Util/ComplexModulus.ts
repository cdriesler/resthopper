import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexModulus extends ResthopperComponent {

	public guid: string = "88fb33f9-f467-452b-a0e3-44bdb78a9b06";
	public name: string = "ComplexModulus";
	public nickName: string = "CMod";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Get the modulus of a Complex number";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"complex_c": ComplexModulusInput_complex_c,
	}

	public output:
	{
		"modulus_m": ComplexModulusOutput_modulus_m,
	}

	constructor() {
		super();
		this.input = {
			"complex_c": new ComplexModulusInput_complex_c(),
		}
		this.output = {
			"modulus_m": new ComplexModulusOutput_modulus_m(),
		}
	}

}

class ComplexModulusInput_complex_c extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexModulusOutput_modulus_m extends ResthopperParameter {

	public name: string = "Modulus";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
