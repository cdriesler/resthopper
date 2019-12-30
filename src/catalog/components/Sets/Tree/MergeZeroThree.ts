import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroThree extends ResthopperComponent {

	public guid: string = "481f0339-1299-43ba-b15c-c07891a8f822";
	public name: string = "Merge 03";
	public nickName: string = "M3";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge three streams into one.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeZeroThreeInput_streama_a,
		"streamb_b": MergeZeroThreeInput_streamb_b,
		"streamc_c": MergeZeroThreeInput_streamc_c,
	}

	public output:
	{
		"stream_s": MergeZeroThreeOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeZeroThreeInput_streama_a(),
			"streamb_b": new MergeZeroThreeInput_streamb_b(),
			"streamc_c": new MergeZeroThreeInput_streamc_c(),
		}
		this.output = {
			"stream_s": new MergeZeroThreeOutput_stream_s(),
		}
	}

}

class MergeZeroThreeInput_streama_a extends ResthopperParameter {

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

class MergeZeroThreeInput_streamb_b extends ResthopperParameter {

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

class MergeZeroThreeInput_streamc_c extends ResthopperParameter {

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

class MergeZeroThreeOutput_stream_s extends ResthopperParameter {

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
