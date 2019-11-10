import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Merge extends ResthopperComponent {

	public guid: string = "86866576-6cc0-485a-9cd2-6f7d493f57f7";
	public name: string = "Merge";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge two streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"streama_a": MergeInput_streama_a,
		"streamb_b": MergeInput_streamb_b,
	}

	public output:
	{
		"stream_s": MergeOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"streama_a": new MergeInput_streama_a(),
			"streamb_b": new MergeInput_streamb_b(),
		}
		this.output = {
			"stream_s": new MergeOutput_stream_s(),
		}
	}

}

class MergeInput_streama_a extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeInput_streamb_b extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
