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
		"Expression_F": EvaluateInput_Expression_F,
		"Variablex_x": EvaluateInput_Variablex_x,
		"Variabley_y": EvaluateInput_Variabley_y,
	}

	public output:
	{
		"Result_r": EvaluateOutput_Result_r,
	}

	constructor() {
		super();
		this.input = {
			"Expression_F": new EvaluateInput_Expression_F(),
			"Variablex_x": new EvaluateInput_Variablex_x(),
			"Variabley_y": new EvaluateInput_Variabley_y(),
		}
		this.output = {
			"Result_r": new EvaluateOutput_Result_r(),
		}
	}

}

class EvaluateInput_Expression_F extends ResthopperParameter {

	public name: string = "Expression";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Expression;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateInput_Variablex_x extends ResthopperParameter {

	public name: string = "Variablex";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateInput_Variabley_y extends ResthopperParameter {

	public name: string = "Variabley";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateOutput_Result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "r";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
