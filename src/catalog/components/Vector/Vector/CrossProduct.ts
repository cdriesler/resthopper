import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CrossProduct extends ResthopperComponent {

	public guid: string = "2a5cfb31-028a-4b34-b4e1-9b20ae15312e";
	public name: string = "CrossProduct";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute vector cross product.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"VectorA_A": CrossProductInput_VectorA_A,
		"VectorB_B": CrossProductInput_VectorB_B,
		"Unitize_U": CrossProductInput_Unitize_U,
	}

	public output:
	{
		"Vector_V": CrossProductOutput_Vector_V,
		"Length_L": CrossProductOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"VectorA_A": new CrossProductInput_VectorA_A(),
			"VectorB_B": new CrossProductInput_VectorB_B(),
			"Unitize_U": new CrossProductInput_Unitize_U(),
		}
		this.output = {
			"Vector_V": new CrossProductOutput_Vector_V(),
			"Length_L": new CrossProductOutput_Length_L(),
		}
	}

}

class CrossProductInput_VectorA_A extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductInput_VectorB_B extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductInput_Unitize_U extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossProductOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
