import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Weave extends ResthopperComponent {

	public guid: string = "50faccbd-9c92-4175-a5fa-d65e36013db6";
	public name: string = "Weave";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Weave a set of input data using a custom pattern.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Stream0_0": WeaveInput_Stream0_0,
		"Stream1_1": WeaveInput_Stream1_1,
		"Pattern_P": WeaveInput_Pattern_P,
	}

	public output:
	{
		"Weave_W": WeaveOutput_Weave_W,
	}

	constructor() {
		super();
		this.input = {
			"Stream0_0": new WeaveInput_Stream0_0(),
			"Stream1_1": new WeaveInput_Stream1_1(),
			"Pattern_P": new WeaveInput_Pattern_P(),
		}
		this.output = {
			"Weave_W": new WeaveOutput_Weave_W(),
		}
	}

}

class WeaveInput_Stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeaveInput_Stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeaveInput_Pattern_P extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeaveOutput_Weave_W extends ResthopperParameter {

	public name: string = "Weave";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
