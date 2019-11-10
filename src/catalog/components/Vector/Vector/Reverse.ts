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
		"Vector_V": ReverseInput_Vector_V,
	}

	public output:
	{
		"Vector_V": ReverseOutput_Vector_V,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new ReverseInput_Vector_V(),
		}
		this.output = {
			"Vector_V": new ReverseOutput_Vector_V(),
		}
	}

}

class ReverseInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReverseOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
