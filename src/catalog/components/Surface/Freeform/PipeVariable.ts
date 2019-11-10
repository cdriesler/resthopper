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
		"Curve_C": PipeVariableInput_Curve_C,
		"Parameters_t": PipeVariableInput_Parameters_t,
		"Radii_R": PipeVariableInput_Radii_R,
		"Caps_E": PipeVariableInput_Caps_E,
	}

	public output:
	{
		"Pipe_P": PipeVariableOutput_Pipe_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new PipeVariableInput_Curve_C(),
			"Parameters_t": new PipeVariableInput_Parameters_t(),
			"Radii_R": new PipeVariableInput_Radii_R(),
			"Caps_E": new PipeVariableInput_Caps_E(),
		}
		this.output = {
			"Pipe_P": new PipeVariableOutput_Pipe_P(),
		}
	}

}

class PipeVariableInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableInput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableInput_Radii_R extends ResthopperParameter {

	public name: string = "Radii";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableInput_Caps_E extends ResthopperParameter {

	public name: string = "Caps";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PipeVariableOutput_Pipe_P extends ResthopperParameter {

	public name: string = "Pipe";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
