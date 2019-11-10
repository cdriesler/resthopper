import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EndPoints extends ResthopperComponent {

	public guid: string = "11bbd48b-bb0a-4f1b-8167-fa297590390d";
	public name: string = "EndPoints";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the end points of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": EndPointsInput_curve_c,
	}

	public output:
	{
		"start_s": EndPointsOutput_start_s,
		"end_e": EndPointsOutput_end_e,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new EndPointsInput_curve_c(),
		}
		this.output = {
			"start_s": new EndPointsOutput_start_s(),
			"end_e": new EndPointsOutput_end_e(),
		}
	}

}

class EndPointsInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EndPointsOutput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EndPointsOutput_end_e extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
