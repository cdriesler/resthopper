import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroFour extends ResthopperComponent {

	public guid: string = "b5be5d1f-717f-493c-b958-816957f271fd";
	public name: string = "Merge04";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge four streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"StreamA_A": MergeZeroFourInput_StreamA_A,
		"StreamB_B": MergeZeroFourInput_StreamB_B,
		"StreamC_C": MergeZeroFourInput_StreamC_C,
		"StreamD_D": MergeZeroFourInput_StreamD_D,
	}

	public output:
	{
		"Stream_S": MergeZeroFourOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeZeroFourInput_StreamA_A(),
			"StreamB_B": new MergeZeroFourInput_StreamB_B(),
			"StreamC_C": new MergeZeroFourInput_StreamC_C(),
			"StreamD_D": new MergeZeroFourInput_StreamD_D(),
		}
		this.output = {
			"Stream_S": new MergeZeroFourOutput_Stream_S(),
		}
	}

}

class MergeZeroFourInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourInput_StreamC_C extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourInput_StreamD_D extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
