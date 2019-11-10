import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroThree extends ResthopperComponent {

	public guid: string = "481f0339-1299-43ba-b15c-c07891a8f822";
	public name: string = "Merge03";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge three streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"StreamA_A": MergeZeroThreeInput_StreamA_A,
		"StreamB_B": MergeZeroThreeInput_StreamB_B,
		"StreamC_C": MergeZeroThreeInput_StreamC_C,
	}

	public output:
	{
		"Stream_S": MergeZeroThreeOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeZeroThreeInput_StreamA_A(),
			"StreamB_B": new MergeZeroThreeInput_StreamB_B(),
			"StreamC_C": new MergeZeroThreeInput_StreamC_C(),
		}
		this.output = {
			"Stream_S": new MergeZeroThreeOutput_Stream_S(),
		}
	}

}

class MergeZeroThreeInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroThreeInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroThreeInput_StreamC_C extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroThreeOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
