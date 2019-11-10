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
		"Stream0_0": PicknChooseInput_Stream0_0,
		"Stream1_1": PicknChooseInput_Stream1_1,
		"Pattern_P": PicknChooseInput_Pattern_P,
	}

	public output:
	{
		"Result_R": PicknChooseOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Stream0_0": new PicknChooseInput_Stream0_0(),
			"Stream1_1": new PicknChooseInput_Stream1_1(),
			"Pattern_P": new PicknChooseInput_Pattern_P(),
		}
		this.output = {
			"Result_R": new PicknChooseOutput_Result_R(),
		}
	}

}

class PicknChooseInput_Stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PicknChooseInput_Stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PicknChooseInput_Pattern_P extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PicknChooseOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
