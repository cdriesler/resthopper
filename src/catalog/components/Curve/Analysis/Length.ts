import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Length extends ResthopperComponent {

	public guid: string = "c75b62fa-0a33-4da7-a5bd-03fd0068fd93";
	public name: string = "Length";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": LengthInput_Curve_C,
	}

	public output:
	{
		"Length_L": LengthOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new LengthInput_Curve_C(),
		}
		this.output = {
			"Length_L": new LengthOutput_Length_L(),
		}
	}

}

class LengthInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
