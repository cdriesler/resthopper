import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GhPythonScript extends ResthopperComponent {

	public guid: string = "410755b1-224a-4c1e-a407-bf32fb45ea7e";
	public name: string = "GhPythonScript";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "GhPython provides a Python script component";
	public isObsolete: boolean = false;

	public library: string = "";

	public input:
	{
		"x_x": GhPythonScriptInput_x_x,
		"y_y": GhPythonScriptInput_y_y,
	}

	public output:
	{
		"out_out": GhPythonScriptOutput_out_out,
		"a_a": GhPythonScriptOutput_a_a,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new GhPythonScriptInput_x_x(),
			"y_y": new GhPythonScriptInput_y_y(),
		}
		this.output = {
			"out_out": new GhPythonScriptOutput_out_out(),
			"a_a": new GhPythonScriptOutput_a_a(),
		}
	}

}

class GhPythonScriptInput_x_x extends ResthopperParameter {

	public name: string = "x";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GhPythonScriptInput_y_y extends ResthopperParameter {

	public name: string = "y";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GhPythonScriptOutput_out_out extends ResthopperParameter {

	public name: string = "out";
	public nickName: string = "out";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GhPythonScriptOutput_a_a extends ResthopperParameter {

	public name: string = "a";
	public nickName: string = "a";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
