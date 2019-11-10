import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VBScript extends ResthopperComponent {

	public guid: string = "079bd9bd-54a0-41d4-98af-db999015f63d";
	public name: string = "VBScript";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A VB.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

	public input:
	{
		"x_x": VBScriptInput_x_x,
		"y_y": VBScriptInput_y_y,
	}

	public output:
	{
		"out_out": VBScriptOutput_out_out,
		"A_A": VBScriptOutput_A_A,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new VBScriptInput_x_x(),
			"y_y": new VBScriptInput_y_y(),
		}
		this.output = {
			"out_out": new VBScriptOutput_out_out(),
			"A_A": new VBScriptOutput_A_A(),
		}
	}

}

class VBScriptInput_x_x extends ResthopperParameter {

	public name: string = "x";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VBScriptInput_y_y extends ResthopperParameter {

	public name: string = "y";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VBScriptOutput_out_out extends ResthopperParameter {

	public name: string = "out";
	public nickName: string = "out";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VBScriptOutput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
