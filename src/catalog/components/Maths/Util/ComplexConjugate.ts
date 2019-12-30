import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexConjugate extends ResthopperComponent {

	public guid: string = "7d2a6064-51f0-45b2-adc4-f417b30dcd15";
	public name: string = "Complex Conjugate";
	public nickName: string = "z";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Create the conjugate of a Complex number";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"complex_c": ComplexConjugateInput_complex_c,
	}

	public output:
	{
		"conjugate_c": ComplexConjugateOutput_conjugate_c,
	}

	constructor() {
		super();
		this.input = {
			"complex_c": new ComplexConjugateInput_complex_c(),
		}
		this.output = {
			"conjugate_c": new ComplexConjugateOutput_conjugate_c(),
		}
	}

}

class ComplexConjugateInput_complex_c extends ResthopperParameter {

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

class ComplexConjugateOutput_conjugate_c extends ResthopperParameter {

	public name: string = "Conjugate";
	public nickName: string = "C";
	public description: string = "Conjugate of the Complex number [C]"
	public isOptional: boolean = false;
	public typeName: string = "Complex"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
