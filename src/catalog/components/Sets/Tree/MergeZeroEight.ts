import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroEight extends ResthopperComponent {

	public guid: string = "a70aa477-0109-4e75-ba73-78725dca0274";
	public name: string = "Merge08";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge eight streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"StreamA_A": MergeZeroEightInput_StreamA_A,
		"StreamB_B": MergeZeroEightInput_StreamB_B,
		"StreamC_C": MergeZeroEightInput_StreamC_C,
		"StreamD_D": MergeZeroEightInput_StreamD_D,
		"StreamE_E": MergeZeroEightInput_StreamE_E,
		"StreamF_F": MergeZeroEightInput_StreamF_F,
		"StreamG_G": MergeZeroEightInput_StreamG_G,
		"StreamH_H": MergeZeroEightInput_StreamH_H,
	}

	public output:
	{
		"Stream_S": MergeZeroEightOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeZeroEightInput_StreamA_A(),
			"StreamB_B": new MergeZeroEightInput_StreamB_B(),
			"StreamC_C": new MergeZeroEightInput_StreamC_C(),
			"StreamD_D": new MergeZeroEightInput_StreamD_D(),
			"StreamE_E": new MergeZeroEightInput_StreamE_E(),
			"StreamF_F": new MergeZeroEightInput_StreamF_F(),
			"StreamG_G": new MergeZeroEightInput_StreamG_G(),
			"StreamH_H": new MergeZeroEightInput_StreamH_H(),
		}
		this.output = {
			"Stream_S": new MergeZeroEightOutput_Stream_S(),
		}
	}

}

class MergeZeroEightInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamC_C extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamD_D extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamE_E extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamF_F extends ResthopperParameter {

	public name: string = "StreamF";
	public nickName: string = "F";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamG_G extends ResthopperParameter {

	public name: string = "StreamG";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_StreamH_H extends ResthopperParameter {

	public name: string = "StreamH";
	public nickName: string = "H";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
