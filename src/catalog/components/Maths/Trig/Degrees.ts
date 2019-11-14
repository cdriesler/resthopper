import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Degrees extends ResthopperComponent {

	public guid: string = "0d77c51e-584f-44e8-aed2-c2ddf4803888";
	public name: string = "Degrees";
	public nickName: string = "Deg";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Convert an angle specified in radians to degrees";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"radians_r": DegreesInput_radians_r,
	}

	public output:
	{
		"degrees_d": DegreesOutput_degrees_d,
	}

	constructor() {
		super();
		this.input = {
			"radians_r": new DegreesInput_radians_r(),
		}
		this.output = {
			"degrees_d": new DegreesOutput_degrees_d(),
		}
	}

}

class DegreesInput_radians_r extends ResthopperParameter {

	public name: string = "Radians";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DegreesOutput_degrees_d extends ResthopperParameter {

	public name: string = "Degrees";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
