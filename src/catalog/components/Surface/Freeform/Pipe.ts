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
		"curve_c": PipeInput_curve_c,
		"radius_r": PipeInput_radius_r,
		"caps_e": PipeInput_caps_e,
	}

	public output:
	{
		"pipe_p": PipeOutput_pipe_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new PipeInput_curve_c(),
			"radius_r": new PipeInput_radius_r(),
			"caps_e": new PipeInput_caps_e(),
		}
		this.output = {
			"pipe_p": new PipeOutput_pipe_p(),
		}
	}

}

class PipeInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeInput_caps_e extends ResthopperParameter {

	public name: string = "Caps";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeOutput_pipe_p extends ResthopperParameter {

	public name: string = "Pipe";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
