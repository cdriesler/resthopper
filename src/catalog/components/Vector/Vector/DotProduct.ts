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

	public library: string = "Vector Components";

	public input:
	{
		"VectorA_A": DotProductInput_VectorA_A,
		"VectorB_B": DotProductInput_VectorB_B,
		"Unitize_U": DotProductInput_Unitize_U,
	}

	public output:
	{
		"Dotproduct_D": DotProductOutput_Dotproduct_D,
	}

	constructor() {
		super();
		this.input = {
			"VectorA_A": new DotProductInput_VectorA_A(),
			"VectorB_B": new DotProductInput_VectorB_B(),
			"Unitize_U": new DotProductInput_Unitize_U(),
		}
		this.output = {
			"Dotproduct_D": new DotProductOutput_Dotproduct_D(),
		}
	}

}

class DotProductInput_VectorA_A extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotProductInput_VectorB_B extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotProductInput_Unitize_U extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotProductOutput_Dotproduct_D extends ResthopperParameter {

	public name: string = "Dotproduct";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
