import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PipeVariable extends ResthopperComponent {

	public guid: string = "888f9c3c-f1e1-4344-94b0-5ee6a45aee11";
	public name: string = "PipeVariable";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a pipe surface with variable radii around a rail curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curve_c": PipeVariableInput_curve_c,
		"parameters_t": PipeVariableInput_parameters_t,
		"radii_r": PipeVariableInput_radii_r,
		"caps_e": PipeVariableInput_caps_e,
	}

	public output:
	{
		"pipe_p": PipeVariableOutput_pipe_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new PipeVariableInput_curve_c(),
			"parameters_t": new PipeVariableInput_parameters_t(),
			"radii_r": new PipeVariableInput_radii_r(),
			"caps_e": new PipeVariableInput_caps_e(),
		}
		this.output = {
			"pipe_p": new PipeVariableOutput_pipe_p(),
		}
	}

}

class PipeVariableInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableInput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableInput_radii_r extends ResthopperParameter {

	public name: string = "Radii";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableInput_caps_e extends ResthopperParameter {

	public name: string = "Caps";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableOutput_pipe_p extends ResthopperParameter {

	public name: string = "Pipe";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
