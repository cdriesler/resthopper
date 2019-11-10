import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorDisplay extends ResthopperComponent {

	public guid: string = "2a3f7078-2e25-4dd4-96f7-0efb491bd61c";
	public name: string = "VectorDisplay";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Preview vectors in the viewport";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Anchor_A": VectorDisplayInput_Anchor_A,
		"Vector_V": VectorDisplayInput_Vector_V,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Anchor_A": new VectorDisplayInput_Anchor_A(),
			"Vector_V": new VectorDisplayInput_Vector_V(),
		}
		this.output = {

		}
	}

}

class VectorDisplayInput_Anchor_A extends ResthopperParameter {

	public name: string = "Anchor";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = true;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
