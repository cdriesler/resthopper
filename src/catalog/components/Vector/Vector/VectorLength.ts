import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorLength extends ResthopperComponent {

	public guid: string = "675e31bf-1775-48d7-bb8d-76b77786dd53";
	public name: string = "VectorLength";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute the length (amplitude) of a vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Vector_V": VectorLengthInput_Vector_V,
	}

	public output:
	{
		"Length_L": VectorLengthOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new VectorLengthInput_Vector_V(),
		}
		this.output = {
			"Length_L": new VectorLengthOutput_Length_L(),
		}
	}

}

class VectorLengthInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorLengthOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
