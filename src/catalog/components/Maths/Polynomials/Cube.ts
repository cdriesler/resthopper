import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cube extends ResthopperComponent {

	public guid: string = "7e3185eb-a38c-4949-bcf2-0e80dee3a344";
	public name: string = "Cube";
	public nickName: string = "Cube";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the cube of a value";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": CubeInput_value_x,
	}

	public output:
	{
		"result_y": CubeOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new CubeInput_value_x(),
		}
		this.output = {
			"result_y": new CubeOutput_result_y(),
		}
	}

}

class CubeInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Input value"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CubeOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Output value"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
