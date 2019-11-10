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
		"Vector_V": MultiplyInput_Vector_V,
		"Factor_F": MultiplyInput_Factor_F,
	}

	public output:
	{
		"Vector_V": MultiplyOutput_Vector_V,
		"Length_L": MultiplyOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new MultiplyInput_Vector_V(),
			"Factor_F": new MultiplyInput_Factor_F(),
		}
		this.output = {
			"Vector_V": new MultiplyOutput_Vector_V(),
			"Length_L": new MultiplyOutput_Length_L(),
		}
	}

}

class MultiplyInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplyInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplyOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplyOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
