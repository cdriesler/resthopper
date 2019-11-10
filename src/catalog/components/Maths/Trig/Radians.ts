import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Radians extends ResthopperComponent {

	public guid: string = "a4cd2751-414d-42ec-8916-476ebf62d7fe";
	public name: string = "Radians";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Convert an angle specified in degrees to radians";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"degrees_d": RadiansInput_degrees_d,
	}

	public output:
	{
		"radians_r": RadiansOutput_radians_r,
	}

	constructor() {
		super();
		this.input = {
			"degrees_d": new RadiansInput_degrees_d(),
		}
		this.output = {
			"radians_r": new RadiansOutput_radians_r(),
		}
	}

}

class RadiansInput_degrees_d extends ResthopperParameter {

	public name: string = "Degrees";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadiansOutput_radians_r extends ResthopperParameter {

	public name: string = "Radians";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
