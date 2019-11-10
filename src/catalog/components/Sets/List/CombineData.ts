import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CombineData extends ResthopperComponent {

	public guid: string = "e7c80ff6-0299-4303-be36-3080977c14a1";
	public name: string = "CombineData";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Combine non-null items out of several inputs";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"input0_0": CombineDataInput_input0_0,
		"input1_1": CombineDataInput_input1_1,
	}

	public output:
	{
		"result_r": CombineDataOutput_result_r,
		"index_i": CombineDataOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"input0_0": new CombineDataInput_input0_0(),
			"input1_1": new CombineDataInput_input1_1(),
		}
		this.output = {
			"result_r": new CombineDataOutput_result_r(),
			"index_i": new CombineDataOutput_index_i(),
		}
	}

}

class CombineDataInput_input0_0 extends ResthopperParameter {

	public name: string = "Input0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDataInput_input1_1 extends ResthopperParameter {

	public name: string = "Input1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDataOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDataOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
