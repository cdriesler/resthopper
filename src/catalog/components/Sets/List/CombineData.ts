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
		"Input0_0": CombineDataInput_Input0_0,
		"Input1_1": CombineDataInput_Input1_1,
	}

	public output:
	{
		"Result_R": CombineDataOutput_Result_R,
		"Index_I": CombineDataOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Input0_0": new CombineDataInput_Input0_0(),
			"Input1_1": new CombineDataInput_Input1_1(),
		}
		this.output = {
			"Result_R": new CombineDataOutput_Result_R(),
			"Index_I": new CombineDataOutput_Index_I(),
		}
	}

}

class CombineDataInput_Input0_0 extends ResthopperParameter {

	public name: string = "Input0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDataInput_Input1_1 extends ResthopperParameter {

	public name: string = "Input1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDataOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDataOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
