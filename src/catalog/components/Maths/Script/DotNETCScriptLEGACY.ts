import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotNETCScriptLEGACY extends ResthopperComponent {

	public guid: string = "88c3f2b5-27f7-48a2-9528-1397fad62b93";
	public name: string = "DotNETCScriptLEGACY";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A C#.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

	public input:
	{
		"x_x": DotNETCScriptLEGACYInput_x_x,
		"y_y": DotNETCScriptLEGACYInput_y_y,
	}

	public output:
	{
		"Output_out": DotNETCScriptLEGACYOutput_Output_out,
		"A_A": DotNETCScriptLEGACYOutput_A_A,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new DotNETCScriptLEGACYInput_x_x(),
			"y_y": new DotNETCScriptLEGACYInput_y_y(),
		}
		this.output = {
			"Output_out": new DotNETCScriptLEGACYOutput_Output_out(),
			"A_A": new DotNETCScriptLEGACYOutput_A_A(),
		}
	}

}

class DotNETCScriptLEGACYInput_x_x extends ResthopperParameter {

	public name: string = "x";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETCScriptLEGACYInput_y_y extends ResthopperParameter {

	public name: string = "y";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETCScriptLEGACYOutput_Output_out extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "out";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETCScriptLEGACYOutput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
