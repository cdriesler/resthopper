import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SquareRoot extends ResthopperComponent {

	public guid: string = "ad476cb7-b6d1-41c8-986b-0df243a64146";
	public name: string = "SquareRoot";
	public nickName: string = "Sqrt";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the square root of a value";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": SquareRootInput_value_x,
	}

	public output:
	{
		"result_y": SquareRootOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new SquareRootInput_value_x(),
		}
		this.output = {
			"result_y": new SquareRootOutput_result_y(),
		}
	}

}

class SquareRootInput_value_x extends ResthopperParameter {

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

class SquareRootOutput_result_y extends ResthopperParameter {

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
