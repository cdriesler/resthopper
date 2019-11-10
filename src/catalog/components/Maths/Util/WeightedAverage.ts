import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class WeightedAverage extends ResthopperComponent {

	public guid: string = "338666eb-14c5-4d9b-82e2-2b5be60655df";
	public name: string = "WeightedAverage";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Solve the arithmetic weighted average for a set of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"input_i": WeightedAverageInput_input_i,
		"weights_w": WeightedAverageInput_weights_w,
	}

	public output:
	{
		"arithmeticmean_am": WeightedAverageOutput_arithmeticmean_am,
	}

	constructor() {
		super();
		this.input = {
			"input_i": new WeightedAverageInput_input_i(),
			"weights_w": new WeightedAverageInput_weights_w(),
		}
		this.output = {
			"arithmeticmean_am": new WeightedAverageOutput_arithmeticmean_am(),
		}
	}

}

class WeightedAverageInput_input_i extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeightedAverageInput_weights_w extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeightedAverageOutput_arithmeticmean_am extends ResthopperParameter {

	public name: string = "Arithmeticmean";
	public nickName: string = "AM";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
