import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Addition extends ResthopperComponent {

	public guid: string = "fb012ef9-4734-4049-84a0-b92b85bb09da";
	public name: string = "Addition";
	public nickName: string = "VAdd";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-vector addition.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vectora_a": AdditionInput_vectora_a,
		"vectorb_b": AdditionInput_vectorb_b,
		"unitize_u": AdditionInput_unitize_u,
	}

	public output:
	{
		"vector_v": AdditionOutput_vector_v,
		"length_l": AdditionOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"vectora_a": new AdditionInput_vectora_a(),
			"vectorb_b": new AdditionInput_vectorb_b(),
			"unitize_u": new AdditionInput_unitize_u(),
		}
		this.output = {
			"vector_v": new AdditionOutput_vector_v(),
			"length_l": new AdditionOutput_length_l(),
		}
	}

}

class AdditionInput_vectora_a extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionInput_vectorb_b extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionInput_unitize_u extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
