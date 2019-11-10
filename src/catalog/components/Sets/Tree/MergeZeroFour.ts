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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeZeroFourInput_streama_a,
		"streamb_b": MergeZeroFourInput_streamb_b,
		"streamc_c": MergeZeroFourInput_streamc_c,
		"streamd_d": MergeZeroFourInput_streamd_d,
	}

	public output:
	{
		"stream_s": MergeZeroFourOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeZeroFourInput_streama_a(),
			"streamb_b": new MergeZeroFourInput_streamb_b(),
			"streamc_c": new MergeZeroFourInput_streamc_c(),
			"streamd_d": new MergeZeroFourInput_streamd_d(),
		}
		this.output = {
			"stream_s": new MergeZeroFourOutput_stream_s(),
		}
	}

}

class MergeZeroFourInput_streama_a extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourInput_streamb_b extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourInput_streamc_c extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourInput_streamd_d extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFourOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
