import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InterpolateDate extends ResthopperComponent {

	public guid: string = "4083802b-3dd9-4b13-9756-bf5441213e70";
	public name: string = "Interpolate Date";
	public nickName: string = "IntDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Interpolate between two dates or times.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"datea_a": InterpolateDateInput_datea_a,
		"dateb_b": InterpolateDateInput_dateb_b,
		"interpolation_t": InterpolateDateInput_interpolation_t,
	}

	public output:
	{
		"date_d": InterpolateDateOutput_date_d,
	}

	constructor() {
		super();
		this.input = {
			"datea_a": new InterpolateDateInput_datea_a(),
			"dateb_b": new InterpolateDateInput_dateb_b(),
			"interpolation_t": new InterpolateDateInput_interpolation_t(),
		}
		this.output = {
			"date_d": new InterpolateDateOutput_date_d(),
		}
	}

}

class InterpolateDateInput_datea_a extends ResthopperParameter {

	public name: string = "DateA";
	public nickName: string = "A";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateDateInput_dateb_b extends ResthopperParameter {

	public name: string = "DateB";
	public nickName: string = "B";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateDateInput_interpolation_t extends ResthopperParameter {

	public name: string = "Interpolation";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateDateOutput_date_d extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
