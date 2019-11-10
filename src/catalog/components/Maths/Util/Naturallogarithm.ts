import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Naturallogarithm extends ResthopperComponent {

	public guid: string = "b6cac37c-21b9-46c6-bd0d-17ff67796578";
	public name: string = "Naturallogarithm";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of the natural number (e).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Factor_N": NaturallogarithmInput_Factor_N,
	}

	public output:
	{
		"Output_y": NaturallogarithmOutput_Output_y,
	}

	constructor() {
		super();
		this.input = {
			"Factor_N": new NaturallogarithmInput_Factor_N(),
		}
		this.output = {
			"Output_y": new NaturallogarithmOutput_Output_y(),
		}
	}

}

class NaturallogarithmInput_Factor_N extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NaturallogarithmOutput_Output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
