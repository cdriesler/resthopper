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
		"Input_I": WeightedAverageInput_Input_I,
		"Weights_W": WeightedAverageInput_Weights_W,
	}

	public output:
	{
		"Arithmeticmean_AM": WeightedAverageOutput_Arithmeticmean_AM,
	}

	constructor() {
		super();
		this.input = {
			"Input_I": new WeightedAverageInput_Input_I(),
			"Weights_W": new WeightedAverageInput_Weights_W(),
		}
		this.output = {
			"Arithmeticmean_AM": new WeightedAverageOutput_Arithmeticmean_AM(),
		}
	}

}

class WeightedAverageInput_Input_I extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeightedAverageInput_Weights_W extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeightedAverageOutput_Arithmeticmean_AM extends ResthopperParameter {

	public name: string = "Arithmeticmean";
	public nickName: string = "AM";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
