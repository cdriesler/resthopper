import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Square extends ResthopperComponent {

	public guid: string = "2280dde4-9fa2-4b4a-ae2f-37d554861367";
	public name: string = "Square";
	public nickName: string = "Sqr";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the square of a value";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": SquareInput_value_x,
	}

	public output:
	{
		"result_y": SquareOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new SquareInput_value_x(),
		}
		this.output = {
			"result_y": new SquareOutput_result_y(),
		}
	}

}

class SquareInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
