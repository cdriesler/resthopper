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
		"curve_c": LengthInput_curve_c,
	}

	public output:
	{
		"length_l": LengthOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new LengthInput_curve_c(),
		}
		this.output = {
			"length_l": new LengthOutput_length_l(),
		}
	}

}

class LengthInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
