import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroFive extends ResthopperComponent {

	public guid: string = "f4b0f7b4-5a10-46c4-8191-58d7d66ffdff";
	public name: string = "Merge05";
	public nickName: string = "M5";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge five streams into one.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeZeroFiveInput_streama_a,
		"streamb_b": MergeZeroFiveInput_streamb_b,
		"streamc_c": MergeZeroFiveInput_streamc_c,
		"streamd_d": MergeZeroFiveInput_streamd_d,
		"streame_e": MergeZeroFiveInput_streame_e,
	}

	public output:
	{
		"stream_s": MergeZeroFiveOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeZeroFiveInput_streama_a(),
			"streamb_b": new MergeZeroFiveInput_streamb_b(),
			"streamc_c": new MergeZeroFiveInput_streamc_c(),
			"streamd_d": new MergeZeroFiveInput_streamd_d(),
			"streame_e": new MergeZeroFiveInput_streame_e(),
		}
		this.output = {
			"stream_s": new MergeZeroFiveOutput_stream_s(),
		}
	}

}

class MergeZeroFiveInput_streama_a extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_streamb_b extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_streamc_c extends ResthopperParameter {

	public name: string = "StreamC";
	public nickName: string = "C";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_streamd_d extends ResthopperParameter {

	public name: string = "StreamD";
	public nickName: string = "D";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveInput_streame_e extends ResthopperParameter {

	public name: string = "StreamE";
	public nickName: string = "E";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeZeroFiveOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
