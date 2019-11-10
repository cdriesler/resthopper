import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SquareRoot extends ResthopperComponent {

	public guid: string = "ad476cb7-b6d1-41c8-986b-0df243a64146";
	public name: string = "SquareRoot";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the square root of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": SquareRootInput_Value_x,
	}

	public output:
	{
		"Result_y": SquareRootOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new SquareRootInput_Value_x(),
		}
		this.output = {
			"Result_y": new SquareRootOutput_Result_y(),
		}
	}

}

class SquareRootInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SquareRootOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
