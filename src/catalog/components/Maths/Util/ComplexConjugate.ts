import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ComplexConjugate extends ResthopperComponent {

	public guid: string = "7d2a6064-51f0-45b2-adc4-f417b30dcd15";
	public name: string = "ComplexConjugate";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Create the conjugate of a Complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Complex_C": ComplexConjugateInput_Complex_C,
	}

	public output:
	{
		"Conjugate_C": ComplexConjugateOutput_Conjugate_C,
	}

	constructor() {
		super();
		this.input = {
			"Complex_C": new ComplexConjugateInput_Complex_C(),
		}
		this.output = {
			"Conjugate_C": new ComplexConjugateOutput_Conjugate_C(),
		}
	}

}

class ComplexConjugateInput_Complex_C extends ResthopperParameter {

	public name: string = "Complex";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ComplexConjugateOutput_Conjugate_C extends ResthopperParameter {

	public name: string = "Conjugate";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Complex;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
