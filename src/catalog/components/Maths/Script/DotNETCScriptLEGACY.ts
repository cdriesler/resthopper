import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotNETCScriptLEGACY extends ResthopperComponent {

	public guid: string = "88c3f2b5-27f7-48a2-9528-1397fad62b93";
	public name: string = "DotNETCScriptLEGACY";
	public nickName: string = "C";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A C#.NET scriptable component";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Script Components";

	public input:
	{
		"x_x": DotNETCScriptLEGACYInput_x_x,
		"y_y": DotNETCScriptLEGACYInput_y_y,
	}

	public output:
	{
		"output_out": DotNETCScriptLEGACYOutput_output_out,
		"a_a": DotNETCScriptLEGACYOutput_a_a,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new DotNETCScriptLEGACYInput_x_x(),
			"y_y": new DotNETCScriptLEGACYInput_y_y(),
		}
		this.output = {
			"output_out": new DotNETCScriptLEGACYOutput_output_out(),
			"a_a": new DotNETCScriptLEGACYOutput_a_a(),
		}
	}

}

class DotNETCScriptLEGACYInput_x_x extends ResthopperParameter {

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

class DotNETCScriptLEGACYInput_y_y extends ResthopperParameter {

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

class DotNETCScriptLEGACYOutput_output_out extends ResthopperParameter {

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

class DotNETCScriptLEGACYOutput_a_a extends ResthopperParameter {

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
