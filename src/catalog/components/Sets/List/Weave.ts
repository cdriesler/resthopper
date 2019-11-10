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
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"stream0_0": WeaveInput_stream0_0,
		"stream1_1": WeaveInput_stream1_1,
		"pattern_p": WeaveInput_pattern_p,
	}

	public output:
	{
		"weave_w": WeaveOutput_weave_w,
	}

	constructor() {
		super();
		this.input = {
			"stream0_0": new WeaveInput_stream0_0(),
			"stream1_1": new WeaveInput_stream1_1(),
			"pattern_p": new WeaveInput_pattern_p(),
		}
		this.output = {
			"weave_w": new WeaveOutput_weave_w(),
		}
	}

}

class WeaveInput_stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeaveInput_stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeaveInput_pattern_p extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeaveOutput_weave_w extends ResthopperParameter {

	public name: string = "Weave";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
