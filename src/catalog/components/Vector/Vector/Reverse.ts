import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Reverse extends ResthopperComponent {

	public guid: string = "d5788074-d75d-4021-b1a3-0bf992928584";
	public name: string = "Reverse";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Reverse a vector (multiply by -1).";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": ReverseInput_vector_v,
	}

	public output:
	{
		"vector_v": ReverseOutput_vector_v,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new ReverseInput_vector_v(),
		}
		this.output = {
			"vector_v": new ReverseOutput_vector_v(),
		}
	}

}

class ReverseInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReverseOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
