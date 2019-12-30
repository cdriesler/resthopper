import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeOneZero extends ResthopperComponent {

	public guid: string = "22f66ff6-d281-453c-bd8c-36ed24026783";
	public name: string = "Merge 10";
	public nickName: string = "M10";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge ten streams into one.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeOneZeroInput_streama_a,
		"streamb_b": MergeOneZeroInput_streamb_b,
		"streamc_c": MergeOneZeroInput_streamc_c,
		"streamd_d": MergeOneZeroInput_streamd_d,
		"streame_e": MergeOneZeroInput_streame_e,
		"streamf_f": MergeOneZeroInput_streamf_f,
		"streamg_g": MergeOneZeroInput_streamg_g,
		"streamh_h": MergeOneZeroInput_streamh_h,
		"streami_i": MergeOneZeroInput_streami_i,
		"streamj_j": MergeOneZeroInput_streamj_j,
	}

	public output:
	{
		"stream_s": MergeOneZeroOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeOneZeroInput_streama_a(),
			"streamb_b": new MergeOneZeroInput_streamb_b(),
			"streamc_c": new MergeOneZeroInput_streamc_c(),
			"streamd_d": new MergeOneZeroInput_streamd_d(),
			"streame_e": new MergeOneZeroInput_streame_e(),
			"streamf_f": new MergeOneZeroInput_streamf_f(),
			"streamg_g": new MergeOneZeroInput_streamg_g(),
			"streamh_h": new MergeOneZeroInput_streamh_h(),
			"streami_i": new MergeOneZeroInput_streami_i(),
			"streamj_j": new MergeOneZeroInput_streamj_j(),
		}
		this.output = {
			"stream_s": new MergeOneZeroOutput_stream_s(),
		}
	}

}

class MergeOneZeroInput_streama_a extends ResthopperParameter {

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

class MergeOneZeroInput_streamb_b extends ResthopperParameter {

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

class MergeOneZeroInput_streamc_c extends ResthopperParameter {

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

class MergeOneZeroInput_streamd_d extends ResthopperParameter {

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

class MergeOneZeroInput_streame_e extends ResthopperParameter {

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

class MergeOneZeroInput_streamf_f extends ResthopperParameter {

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

class MergeOneZeroInput_streamg_g extends ResthopperParameter {

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

class MergeOneZeroInput_streamh_h extends ResthopperParameter {

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

class MergeOneZeroInput_streami_i extends ResthopperParameter {

	public name: string = "StreamI";
	public nickName: string = "I";
	public description: string = "Input stream #9"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroInput_streamj_j extends ResthopperParameter {

	public name: string = "StreamJ";
	public nickName: string = "J";
	public description: string = "Input stream #10"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOneZeroOutput_stream_s extends ResthopperParameter {

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
