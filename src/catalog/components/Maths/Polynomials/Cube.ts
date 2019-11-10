import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cube extends ResthopperComponent {

	public guid: string = "7e3185eb-a38c-4949-bcf2-0e80dee3a344";
	public name: string = "Cube";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the cube of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": CubeInput_Value_x,
	}

	public output:
	{
		"Result_y": CubeOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new CubeInput_Value_x(),
		}
		this.output = {
			"Result_y": new CubeOutput_Result_y(),
		}
	}

}

class CubeInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CubeOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
