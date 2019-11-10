import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Square extends ResthopperComponent {

	public guid: string = "2280dde4-9fa2-4b4a-ae2f-37d554861367";
	public name: string = "Square";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the square of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": SquareInput_Value_x,
	}

	public output:
	{
		"Result_y": SquareOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new SquareInput_Value_x(),
		}
		this.output = {
			"Result_y": new SquareOutput_Result_y(),
		}
	}

}

class SquareInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
