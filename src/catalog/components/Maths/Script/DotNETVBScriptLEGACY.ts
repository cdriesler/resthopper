import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotNETVBScriptLEGACY extends ResthopperComponent {

	public guid: string = "fb6aba99-fead-4e42-b5d8-c6de5ff90ea6";
	public name: string = "DotNETVBScriptLEGACY";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A VB.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

	public input:
	{
		"x_x": DotNETVBScriptLEGACYInput_x_x,
		"y_y": DotNETVBScriptLEGACYInput_y_y,
	}

	public output:
	{
		"Output_out": DotNETVBScriptLEGACYOutput_Output_out,
		"A_A": DotNETVBScriptLEGACYOutput_A_A,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new DotNETVBScriptLEGACYInput_x_x(),
			"y_y": new DotNETVBScriptLEGACYInput_y_y(),
		}
		this.output = {
			"Output_out": new DotNETVBScriptLEGACYOutput_Output_out(),
			"A_A": new DotNETVBScriptLEGACYOutput_A_A(),
		}
	}

}

class DotNETVBScriptLEGACYInput_x_x extends ResthopperParameter {

	public name: string = "x";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETVBScriptLEGACYInput_y_y extends ResthopperParameter {

	public name: string = "y";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETVBScriptLEGACYOutput_Output_out extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "out";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETVBScriptLEGACYOutput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
