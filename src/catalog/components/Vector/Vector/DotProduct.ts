import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotProduct extends ResthopperComponent {

	public guid: string = "43b9ea8f-f772-40f2-9880-011a9c3cbbb0";
	public name: string = "DotProduct";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute vector dot product.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vectora_a": DotProductInput_vectora_a,
		"vectorb_b": DotProductInput_vectorb_b,
		"unitize_u": DotProductInput_unitize_u,
	}

	public output:
	{
		"dotproduct_d": DotProductOutput_dotproduct_d,
	}

	constructor() {
		super();
		this.input = {
			"vectora_a": new DotProductInput_vectora_a(),
			"vectorb_b": new DotProductInput_vectorb_b(),
			"unitize_u": new DotProductInput_unitize_u(),
		}
		this.output = {
			"dotproduct_d": new DotProductOutput_dotproduct_d(),
		}
	}

}

class DotProductInput_vectora_a extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotProductInput_vectorb_b extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotProductInput_unitize_u extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotProductOutput_dotproduct_d extends ResthopperParameter {

	public name: string = "Dotproduct";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
