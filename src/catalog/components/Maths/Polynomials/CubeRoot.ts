import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CubeRoot extends ResthopperComponent {

	public guid: string = "5b0be57a-31f5-4446-a11a-ae0d348bca90";
	public name: string = "CubeRoot";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the cube root of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": CubeRootInput_Value_x,
	}

	public output:
	{
		"Result_y": CubeRootOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new CubeRootInput_Value_x(),
		}
		this.output = {
			"Result_y": new CubeRootOutput_Result_y(),
		}
	}

}

class CubeRootInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CubeRootOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
