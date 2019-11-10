import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroFive extends ResthopperComponent {

	public guid: string = "f4b0f7b4-5a10-46c4-8191-58d7d66ffdff";
	public name: string = "Merge05";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge five streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"StreamA_A": MergeZeroFiveInput_StreamA_A,
		"StreamB_B": MergeZeroFiveInput_StreamB_B,
		"StreamC_C": MergeZeroFiveInput_StreamC_C,
		"StreamD_D": MergeZeroFiveInput_StreamD_D,
		"StreamE_E": MergeZeroFiveInput_StreamE_E,
	}

	public output:
	{
		"Stream_S": MergeZeroFiveOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeZeroFiveInput_StreamA_A(),
			"StreamB_B": new MergeZeroFiveInput_StreamB_B(),
			"StreamC_C": new MergeZeroFiveInput_StreamC_C(),
			"StreamD_D": new MergeZeroFiveInput_StreamD_D(),
			"StreamE_E": new MergeZeroFiveInput_StreamE_E(),
		}
		this.output = {
			"Stream_S": new MergeZeroFiveOutput_Stream_S(),
		}
	}

}

class MergeZeroFiveInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_StreamC_C extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_StreamD_D extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_StreamE_E extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
