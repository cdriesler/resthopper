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
		"Vector_V": DivideInput_Vector_V,
		"Factor_F": DivideInput_Factor_F,
	}

	public output:
	{
		"Vector_V": DivideOutput_Vector_V,
		"Length_L": DivideOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new DivideInput_Vector_V(),
			"Factor_F": new DivideInput_Factor_F(),
		}
		this.output = {
			"Vector_V": new DivideOutput_Vector_V(),
			"Length_L": new DivideOutput_Length_L(),
		}
	}

}

class DivideInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
