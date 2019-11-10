import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Degrees extends ResthopperComponent {

	public guid: string = "0d77c51e-584f-44e8-aed2-c2ddf4803888";
	public name: string = "Degrees";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Convert an angle specified in radians to degrees";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Radians_R": DegreesInput_Radians_R,
	}

	public output:
	{
		"Degrees_D": DegreesOutput_Degrees_D,
	}

	constructor() {
		super();
		this.input = {
			"Radians_R": new DegreesInput_Radians_R(),
		}
		this.output = {
			"Degrees_D": new DegreesOutput_Degrees_D(),
		}
	}

}

class DegreesInput_Radians_R extends ResthopperParameter {

	public name: string = "Radians";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DegreesOutput_Degrees_D extends ResthopperParameter {

	public name: string = "Degrees";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
