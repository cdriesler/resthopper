import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotNETVBScriptLEGACY extends ResthopperComponent {

	public guid: string = "fb6aba99-fead-4e42-b5d8-c6de5ff90ea6";
	public name: string = "DotNETVBScriptLEGACY";
	public nickName: string = "VB";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A VB.NET scriptable component";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Script Components";

	public input:
	{
		"x_x": DotNETVBScriptLEGACYInput_x_x,
		"y_y": DotNETVBScriptLEGACYInput_y_y,
	}

	public output:
	{
		"output_out": DotNETVBScriptLEGACYOutput_output_out,
		"a_a": DotNETVBScriptLEGACYOutput_a_a,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new DotNETVBScriptLEGACYInput_x_x(),
			"y_y": new DotNETVBScriptLEGACYInput_y_y(),
		}
		this.output = {
			"output_out": new DotNETVBScriptLEGACYOutput_output_out(),
			"a_a": new DotNETVBScriptLEGACYOutput_a_a(),
		}
	}

}

class DotNETVBScriptLEGACYInput_x_x extends ResthopperParameter {

	public name: string = "x";
	public nickName: string = "x";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETVBScriptLEGACYInput_y_y extends ResthopperParameter {

	public name: string = "y";
	public nickName: string = "y";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETVBScriptLEGACYOutput_output_out extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "out";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotNETVBScriptLEGACYOutput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
