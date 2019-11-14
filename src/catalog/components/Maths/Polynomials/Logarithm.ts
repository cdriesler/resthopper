import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Logarithm extends ResthopperComponent {

	public guid: string = "27d6f724-a701-4585-992f-3897488abf08";
	public name: string = "Logarithm";
	public nickName: string = "Log";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the Base-10 logarithm of a value.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": LogarithmInput_value_x,
	}

	public output:
	{
		"result_y": LogarithmOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new LogarithmInput_value_x(),
		}
		this.output = {
			"result_y": new LogarithmOutput_result_y(),
		}
	}

}

class LogarithmInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LogarithmOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
