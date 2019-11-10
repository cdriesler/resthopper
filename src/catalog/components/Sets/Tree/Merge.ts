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
		"StreamA_A": MergeInput_StreamA_A,
		"StreamB_B": MergeInput_StreamB_B,
	}

	public output:
	{
		"Stream_S": MergeOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"StreamA_A": new MergeInput_StreamA_A(),
			"StreamB_B": new MergeInput_StreamB_B(),
		}
		this.output = {
			"Stream_S": new MergeOutput_Stream_S(),
		}
	}

}

class MergeInput_StreamA_A extends ResthopperParameter {

	public name: string = "StreamA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeInput_StreamB_B extends ResthopperParameter {

	public name: string = "StreamB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
