import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Shatter extends ResthopperComponent {

	public guid: string = "2ad2a4d4-3de1-42f6-a4b8-f71835f35710";
	public name: string = "Shatter";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Shatter a curve into segments.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": ShatterInput_curve_c,
		"parameters_t": ShatterInput_parameters_t,
	}

	public output:
	{
		"segments_s": ShatterOutput_segments_s,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ShatterInput_curve_c(),
			"parameters_t": new ShatterInput_parameters_t(),
		}
		this.output = {
			"segments_s": new ShatterOutput_segments_s(),
		}
	}

}

class ShatterInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShatterInput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShatterOutput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
