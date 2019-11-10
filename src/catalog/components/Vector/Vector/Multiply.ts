import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Multiply extends ResthopperComponent {

	public guid: string = "63fff845-7c61-4dfb-ba12-44d481b4bf0f";
	public name: string = "Multiply";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-scalar multiplication.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": MultiplyInput_vector_v,
		"factor_f": MultiplyInput_factor_f,
	}

	public output:
	{
		"vector_v": MultiplyOutput_vector_v,
		"length_l": MultiplyOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new MultiplyInput_vector_v(),
			"factor_f": new MultiplyInput_factor_f(),
		}
		this.output = {
			"vector_v": new MultiplyOutput_vector_v(),
			"length_l": new MultiplyOutput_length_l(),
		}
	}

}

class MultiplyInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplyInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplyOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplyOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
