import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CScript extends ResthopperComponent {

	public guid: string = "a9a8ebd2-fff5-4c44-a8f5-739736d129ba";
	public name: string = "CScript";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A C#.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

	public input:
	{
		"x_x": CScriptInput_x_x,
		"y_y": CScriptInput_y_y,
	}

	public output:
	{
		"out_out": CScriptOutput_out_out,
		"A_A": CScriptOutput_A_A,
	}

	constructor() {
		super();
		this.input = {
			"x_x": new CScriptInput_x_x(),
			"y_y": new CScriptInput_y_y(),
		}
		this.output = {
			"out_out": new CScriptOutput_out_out(),
			"A_A": new CScriptOutput_A_A(),
		}
	}

}

class CScriptInput_x_x extends ResthopperParameter {

	public name: string = "x";
	public nickName: string = "x";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CScriptInput_y_y extends ResthopperParameter {

	public name: string = "y";
	public nickName: string = "y";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CScriptOutput_out_out extends ResthopperParameter {

	public name: string = "out";
	public nickName: string = "out";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CScriptOutput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
