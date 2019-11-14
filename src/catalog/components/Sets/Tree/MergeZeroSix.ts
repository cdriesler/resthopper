import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroSix extends ResthopperComponent {

	public guid: string = "ac9b4faf-c9d5-4f6a-a5e9-58c0c2cac116";
	public name: string = "Merge06";
	public nickName: string = "M6";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge six streams into one.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeZeroSixInput_streama_a,
		"streamb_b": MergeZeroSixInput_streamb_b,
		"streamc_c": MergeZeroSixInput_streamc_c,
		"streamd_d": MergeZeroSixInput_streamd_d,
		"streame_e": MergeZeroSixInput_streame_e,
		"streamf_f": MergeZeroSixInput_streamf_f,
	}

	public output:
	{
		"stream_s": MergeZeroSixOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeZeroSixInput_streama_a(),
			"streamb_b": new MergeZeroSixInput_streamb_b(),
			"streamc_c": new MergeZeroSixInput_streamc_c(),
			"streamd_d": new MergeZeroSixInput_streamd_d(),
			"streame_e": new MergeZeroSixInput_streame_e(),
			"streamf_f": new MergeZeroSixInput_streamf_f(),
		}
		this.output = {
			"stream_s": new MergeZeroSixOutput_stream_s(),
		}
	}

}

class MergeZeroSixInput_streama_a extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_streamb_b extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_streamc_c extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_streamd_d extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_streame_e extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixInput_streamf_f extends ResthopperParameter {

	public name: string = "StreamF";
	public nickName: string = "F";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroSixOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
