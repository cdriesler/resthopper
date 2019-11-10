import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Addition extends ResthopperComponent {

	public guid: string = "fb012ef9-4734-4049-84a0-b92b85bb09da";
	public name: string = "Addition";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-vector addition.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"VectorA_A": AdditionInput_VectorA_A,
		"VectorB_B": AdditionInput_VectorB_B,
		"Unitize_U": AdditionInput_Unitize_U,
	}

	public output:
	{
		"Vector_V": AdditionOutput_Vector_V,
		"Length_L": AdditionOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"VectorA_A": new AdditionInput_VectorA_A(),
			"VectorB_B": new AdditionInput_VectorB_B(),
			"Unitize_U": new AdditionInput_Unitize_U(),
		}
		this.output = {
			"Vector_V": new AdditionOutput_Vector_V(),
			"Length_L": new AdditionOutput_Length_L(),
		}
	}

}

class AdditionInput_VectorA_A extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionInput_VectorB_B extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionInput_Unitize_U extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
