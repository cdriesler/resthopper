import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroSix extends ResthopperComponent {

	public guid: string = "ac9b4faf-c9d5-4f6a-a5e9-58c0c2cac116";
	public name: string = "Merge06";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge six streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"StreamA_A": MergeZeroSixInput_StreamA_A,
		"StreamB_B": MergeZeroSixInput_StreamB_B,
		"StreamC_C": MergeZeroSixInput_StreamC_C,
		"StreamD_D": MergeZeroSixInput_StreamD_D,
		"StreamE_E": MergeZeroSixInput_StreamE_E,
		"StreamF_F": MergeZeroSixInput_StreamF_F,
	}

	public output:
	{
		"Stream_S": MergeZeroSixOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeZeroSixInput_StreamA_A(),
			"StreamB_B": new MergeZeroSixInput_StreamB_B(),
			"StreamC_C": new MergeZeroSixInput_StreamC_C(),
			"StreamD_D": new MergeZeroSixInput_StreamD_D(),
			"StreamE_E": new MergeZeroSixInput_StreamE_E(),
			"StreamF_F": new MergeZeroSixInput_StreamF_F(),
		}
		this.output = {
			"Stream_S": new MergeZeroSixOutput_Stream_S(),
		}
	}

}

class MergeZeroSixInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_StreamC_C extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_StreamD_D extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_StreamE_E extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_StreamF_F extends ResthopperParameter {

	public name: string = "StreamF";
	public nickName: string = "F";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
