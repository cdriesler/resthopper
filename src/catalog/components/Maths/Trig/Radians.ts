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

	public library: string = "Math Components";

	public input:
	{
		"Degrees_D": RadiansInput_Degrees_D,
	}

	public output:
	{
		"Radians_R": RadiansOutput_Radians_R,
	}

	constructor() {
		super();
		this.input = {
			"Degrees_D": new RadiansInput_Degrees_D(),
		}
		this.output = {
			"Radians_R": new RadiansOutput_Radians_R(),
		}
	}

}

class RadiansInput_Degrees_D extends ResthopperParameter {

	public name: string = "Degrees";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RadiansOutput_Radians_R extends ResthopperParameter {

	public name: string = "Radians";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
