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
		"Curve_C": ShatterInput_Curve_C,
		"Parameters_t": ShatterInput_Parameters_t,
	}

	public output:
	{
		"Segments_S": ShatterOutput_Segments_S,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ShatterInput_Curve_C(),
			"Parameters_t": new ShatterInput_Parameters_t(),
		}
		this.output = {
			"Segments_S": new ShatterOutput_Segments_S(),
		}
	}

}

class ShatterInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShatterInput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShatterOutput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
