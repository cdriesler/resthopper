import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Divide extends ResthopperComponent {

	public guid: string = "310e1065-d03a-4858-bcd1-809d39c042af";
	public name: string = "Divide";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-scalar division.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": DivideInput_vector_v,
		"factor_f": DivideInput_factor_f,
	}

	public output:
	{
		"vector_v": DivideOutput_vector_v,
		"length_l": DivideOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new DivideInput_vector_v(),
			"factor_f": new DivideInput_factor_f(),
		}
		this.output = {
			"vector_v": new DivideOutput_vector_v(),
			"length_l": new DivideOutput_length_l(),
		}
	}

}

class DivideInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
