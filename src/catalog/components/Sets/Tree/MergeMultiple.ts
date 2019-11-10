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
		"Stream0_0": MergeMultipleInput_Stream0_0,
		"Stream1_1": MergeMultipleInput_Stream1_1,
	}

	public output:
	{
		"Stream_S": MergeMultipleOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"Stream0_0": new MergeMultipleInput_Stream0_0(),
			"Stream1_1": new MergeMultipleInput_Stream1_1(),
		}
		this.output = {
			"Stream_S": new MergeMultipleOutput_Stream_S(),
		}
	}

}

class MergeMultipleInput_Stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeMultipleInput_Stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeMultipleOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
