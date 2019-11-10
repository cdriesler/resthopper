import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeMultiple extends ResthopperComponent {

	public guid: string = "0b6c5dac-6c93-4158-b8d1-ca3187d45f25";
	public name: string = "MergeMultiple";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge multiple input streams into one";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"stream0_0": MergeMultipleInput_stream0_0,
		"stream1_1": MergeMultipleInput_stream1_1,
	}

	public output:
	{
		"stream_s": MergeMultipleOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"stream0_0": new MergeMultipleInput_stream0_0(),
			"stream1_1": new MergeMultipleInput_stream1_1(),
		}
		this.output = {
			"stream_s": new MergeMultipleOutput_stream_s(),
		}
	}

}

class MergeMultipleInput_stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeMultipleInput_stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeMultipleOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
