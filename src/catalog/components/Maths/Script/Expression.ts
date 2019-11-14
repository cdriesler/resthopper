import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Expression extends ResthopperComponent {

	public guid: string = "9df5e896-552d-4c8c-b9ca-4fc147ffa022";
	public name: string = "Expression";
	public nickName: string = "Expression";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "Evaluate an expression";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"variablex_x": ExpressionInput_variablex_x,
		"variabley_y": ExpressionInput_variabley_y,
	}

	public output:
	{
		"result_r": ExpressionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"variablex_x": new ExpressionInput_variablex_x(),
			"variabley_y": new ExpressionInput_variabley_y(),
		}
		this.output = {
			"result_r": new ExpressionOutput_result_r(),
		}
	}

}

class ExpressionInput_variablex_x extends ResthopperParameter {

	public name: string = "Variablex";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExpressionInput_variabley_y extends ResthopperParameter {

	public name: string = "Variabley";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExpressionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
