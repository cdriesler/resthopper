import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PicknChoose extends ResthopperComponent {

	public guid: string = "03b801eb-87cd-476a-a591-257fe5d5bf0f";
	public name: string = "PicknChoose";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Pick and choose from a set of input data.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"stream0_0": PicknChooseInput_stream0_0,
		"stream1_1": PicknChooseInput_stream1_1,
		"pattern_p": PicknChooseInput_pattern_p,
	}

	public output:
	{
		"result_r": PicknChooseOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"stream0_0": new PicknChooseInput_stream0_0(),
			"stream1_1": new PicknChooseInput_stream1_1(),
			"pattern_p": new PicknChooseInput_pattern_p(),
		}
		this.output = {
			"result_r": new PicknChooseOutput_result_r(),
		}
	}

}

class PicknChooseInput_stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PicknChooseInput_stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PicknChooseInput_pattern_p extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PicknChooseOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
