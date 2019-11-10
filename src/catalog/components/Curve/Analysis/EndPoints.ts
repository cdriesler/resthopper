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
		"Curve_C": EndPointsInput_Curve_C,
	}

	public output:
	{
		"Start_S": EndPointsOutput_Start_S,
		"End_E": EndPointsOutput_End_E,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new EndPointsInput_Curve_C(),
		}
		this.output = {
			"Start_S": new EndPointsOutput_Start_S(),
			"End_E": new EndPointsOutput_End_E(),
		}
	}

}

class EndPointsInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EndPointsOutput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EndPointsOutput_End_E extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
