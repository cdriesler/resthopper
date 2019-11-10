import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Evaluate extends ResthopperComponent {

	public guid: string = "cc2b626f-6eff-4d08-9829-2877560693f4";
	public name: string = "Evaluate";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "Evaluate an expression with a flexible number of variables.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"expression_f": EvaluateInput_expression_f,
		"variablex_x": EvaluateInput_variablex_x,
		"variabley_y": EvaluateInput_variabley_y,
	}

	public output:
	{
		"result_r": EvaluateOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"expression_f": new EvaluateInput_expression_f(),
			"variablex_x": new EvaluateInput_variablex_x(),
			"variabley_y": new EvaluateInput_variabley_y(),
		}
		this.output = {
			"result_r": new EvaluateOutput_result_r(),
		}
	}

}

class EvaluateInput_expression_f extends ResthopperParameter {

	public name: string = "Expression";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Expression;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateInput_variablex_x extends ResthopperParameter {

	public name: string = "Variablex";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateInput_variabley_y extends ResthopperParameter {

	public name: string = "Variabley";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "r";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
