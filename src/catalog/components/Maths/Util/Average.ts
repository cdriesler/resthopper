import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Average extends ResthopperComponent {

	public guid: string = "7986486c-621a-48fb-8f27-a28a22c91cc9";
	public name: string = "Average";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Solve the arithmetic average for a set of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Input_I": AverageInput_Input_I,
	}

	public output:
	{
		"Arithmeticmean_AM": AverageOutput_Arithmeticmean_AM,
	}

	constructor() {
		super();
		this.input = {
			"Input_I": new AverageInput_Input_I(),
		}
		this.output = {
			"Arithmeticmean_AM": new AverageOutput_Arithmeticmean_AM(),
		}
	}

}

class AverageInput_Input_I extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AverageOutput_Arithmeticmean_AM extends ResthopperParameter {

	public name: string = "Arithmeticmean";
	public nickName: string = "AM";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
