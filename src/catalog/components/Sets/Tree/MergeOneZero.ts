import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeOneZero extends ResthopperComponent {

	public guid: string = "22f66ff6-d281-453c-bd8c-36ed24026783";
	public name: string = "Merge10";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge ten streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"StreamA_A": MergeOneZeroInput_StreamA_A,
		"StreamB_B": MergeOneZeroInput_StreamB_B,
		"StreamC_C": MergeOneZeroInput_StreamC_C,
		"StreamD_D": MergeOneZeroInput_StreamD_D,
		"StreamE_E": MergeOneZeroInput_StreamE_E,
		"StreamF_F": MergeOneZeroInput_StreamF_F,
		"StreamG_G": MergeOneZeroInput_StreamG_G,
		"StreamH_H": MergeOneZeroInput_StreamH_H,
		"StreamI_I": MergeOneZeroInput_StreamI_I,
		"StreamJ_J": MergeOneZeroInput_StreamJ_J,
	}

	public output:
	{
		"Stream_S": MergeOneZeroOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeOneZeroInput_StreamA_A(),
			"StreamB_B": new MergeOneZeroInput_StreamB_B(),
			"StreamC_C": new MergeOneZeroInput_StreamC_C(),
			"StreamD_D": new MergeOneZeroInput_StreamD_D(),
			"StreamE_E": new MergeOneZeroInput_StreamE_E(),
			"StreamF_F": new MergeOneZeroInput_StreamF_F(),
			"StreamG_G": new MergeOneZeroInput_StreamG_G(),
			"StreamH_H": new MergeOneZeroInput_StreamH_H(),
			"StreamI_I": new MergeOneZeroInput_StreamI_I(),
			"StreamJ_J": new MergeOneZeroInput_StreamJ_J(),
		}
		this.output = {
			"Stream_S": new MergeOneZeroOutput_Stream_S(),
		}
	}

}

class MergeOneZeroInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamC_C extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamD_D extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamE_E extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamF_F extends ResthopperParameter {

	public name: string = "StreamF";
	public nickName: string = "F";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamG_G extends ResthopperParameter {

	public name: string = "StreamG";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamH_H extends ResthopperParameter {

	public name: string = "StreamH";
	public nickName: string = "H";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamI_I extends ResthopperParameter {

	public name: string = "StreamI";
	public nickName: string = "I";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_StreamJ_J extends ResthopperParameter {

	public name: string = "StreamJ";
	public nickName: string = "J";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
