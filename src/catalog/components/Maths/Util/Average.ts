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
		"input_i": AverageInput_input_i,
	}

	public output:
	{
		"arithmeticmean_am": AverageOutput_arithmeticmean_am,
	}

	constructor() {
		super();
		this.input = {
			"input_i": new AverageInput_input_i(),
		}
		this.output = {
			"arithmeticmean_am": new AverageOutput_arithmeticmean_am(),
		}
	}

}

class AverageInput_input_i extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AverageOutput_arithmeticmean_am extends ResthopperParameter {

	public name: string = "Arithmeticmean";
	public nickName: string = "AM";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
