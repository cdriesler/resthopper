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
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": VectorLengthInput_vector_v,
	}

	public output:
	{
		"length_l": VectorLengthOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new VectorLengthInput_vector_v(),
		}
		this.output = {
			"length_l": new VectorLengthOutput_length_l(),
		}
	}

}

class VectorLengthInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorLengthOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
