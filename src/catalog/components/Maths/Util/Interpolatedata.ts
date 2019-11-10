import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolatedata extends ResthopperComponent {

	public guid: string = "e168ff6b-e5c0-48f1-b831-f6996bf3b459";
	public name: string = "Interpolatedata";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Interpolate a collection of data.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Data_D": InterpolatedataInput_Data_D,
		"Parameter_t": InterpolatedataInput_Parameter_t,
	}

	public output:
	{
		"Value_V": InterpolatedataOutput_Value_V,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new InterpolatedataInput_Data_D(),
			"Parameter_t": new InterpolatedataInput_Parameter_t(),
		}
		this.output = {
			"Value_V": new InterpolatedataOutput_Value_V(),
		}
	}

}

class InterpolatedataInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatedataInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatedataOutput_Value_V extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
