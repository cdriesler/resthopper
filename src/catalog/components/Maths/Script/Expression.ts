import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Expression extends ResthopperComponent {

	public guid: string = "9df5e896-552d-4c8c-b9ca-4fc147ffa022";
	public name: string = "Expression";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "Evaluate an expression";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Variablex_x": ExpressionInput_Variablex_x,
		"Variabley_y": ExpressionInput_Variabley_y,
	}

	public output:
	{
		"Result_R": ExpressionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Variablex_x": new ExpressionInput_Variablex_x(),
			"Variabley_y": new ExpressionInput_Variabley_y(),
		}
		this.output = {
			"Result_R": new ExpressionOutput_Result_R(),
		}
	}

}

class ExpressionInput_Variablex_x extends ResthopperParameter {

	public name: string = "Variablex";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExpressionInput_Variabley_y extends ResthopperParameter {

	public name: string = "Variabley";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Expression Variant;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExpressionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
