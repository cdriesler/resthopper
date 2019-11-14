import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CrossProduct extends ResthopperComponent {

	public guid: string = "2a5cfb31-028a-4b34-b4e1-9b20ae15312e";
	public name: string = "CrossProduct";
	public nickName: string = "XProd";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute vector cross product.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vectora_a": CrossProductInput_vectora_a,
		"vectorb_b": CrossProductInput_vectorb_b,
		"unitize_u": CrossProductInput_unitize_u,
	}

	public output:
	{
		"vector_v": CrossProductOutput_vector_v,
		"length_l": CrossProductOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"vectora_a": new CrossProductInput_vectora_a(),
			"vectorb_b": new CrossProductInput_vectorb_b(),
			"unitize_u": new CrossProductInput_unitize_u(),
		}
		this.output = {
			"vector_v": new CrossProductOutput_vector_v(),
			"length_l": new CrossProductOutput_length_l(),
		}
	}

}

class CrossProductInput_vectora_a extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductInput_vectorb_b extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductInput_unitize_u extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
