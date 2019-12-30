import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroEight extends ResthopperComponent {

	public guid: string = "a70aa477-0109-4e75-ba73-78725dca0274";
	public name: string = "Merge 08";
	public nickName: string = "M8";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge eight streams into one.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeZeroEightInput_streama_a,
		"streamb_b": MergeZeroEightInput_streamb_b,
		"streamc_c": MergeZeroEightInput_streamc_c,
		"streamd_d": MergeZeroEightInput_streamd_d,
		"streame_e": MergeZeroEightInput_streame_e,
		"streamf_f": MergeZeroEightInput_streamf_f,
		"streamg_g": MergeZeroEightInput_streamg_g,
		"streamh_h": MergeZeroEightInput_streamh_h,
	}

	public output:
	{
		"stream_s": MergeZeroEightOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeZeroEightInput_streama_a(),
			"streamb_b": new MergeZeroEightInput_streamb_b(),
			"streamc_c": new MergeZeroEightInput_streamc_c(),
			"streamd_d": new MergeZeroEightInput_streamd_d(),
			"streame_e": new MergeZeroEightInput_streame_e(),
			"streamf_f": new MergeZeroEightInput_streamf_f(),
			"streamg_g": new MergeZeroEightInput_streamg_g(),
			"streamh_h": new MergeZeroEightInput_streamh_h(),
		}
		this.output = {
			"stream_s": new MergeZeroEightOutput_stream_s(),
		}
	}

}

class MergeZeroEightInput_streama_a extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public description: string = "Input stream #1"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streamb_b extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public description: string = "Input stream #2"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streamc_c extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public description: string = "Input stream #3"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streamd_d extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public description: string = "Input stream #4"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streame_e extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public description: string = "Input stream #5"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streamf_f extends ResthopperParameter {

	public name: string = "StreamF";
	public nickName: string = "F";
	public description: string = "Input stream #6"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streamg_g extends ResthopperParameter {

	public name: string = "StreamG";
	public nickName: string = "G";
	public description: string = "Input stream #7"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightInput_streamh_h extends ResthopperParameter {

	public name: string = "StreamH";
	public nickName: string = "H";
	public description: string = "Input stream #8"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroEightOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public description: string = "Merged stream"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
