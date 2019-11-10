import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Pipe extends ResthopperComponent {

	public guid: string = "c277f778-6fdf-4890-8f78-347efb23c406";
	public name: string = "Pipe";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a pipe surface around a rail curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curve_C": PipeInput_Curve_C,
		"Radius_R": PipeInput_Radius_R,
		"Caps_E": PipeInput_Caps_E,
	}

	public output:
	{
		"Pipe_P": PipeOutput_Pipe_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new PipeInput_Curve_C(),
			"Radius_R": new PipeInput_Radius_R(),
			"Caps_E": new PipeInput_Caps_E(),
		}
		this.output = {
			"Pipe_P": new PipeOutput_Pipe_P(),
		}
	}

}

class PipeInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeInput_Caps_E extends ResthopperParameter {

	public name: string = "Caps";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeOutput_Pipe_P extends ResthopperParameter {

	public name: string = "Pipe";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
