import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorXYZ extends ResthopperComponent {

	public guid: string = "56b92eab-d121-43f7-94d3-6cd8f0ddead8";
	public name: string = "VectorXYZ";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Create a vector from {xyz} components.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Xcomponent_X": VectorXYZInput_Xcomponent_X,
		"Ycomponent_Y": VectorXYZInput_Ycomponent_Y,
		"Zcomponent_Z": VectorXYZInput_Zcomponent_Z,
	}

	public output:
	{
		"Vector_V": VectorXYZOutput_Vector_V,
		"Length_L": VectorXYZOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Xcomponent_X": new VectorXYZInput_Xcomponent_X(),
			"Ycomponent_Y": new VectorXYZInput_Ycomponent_Y(),
			"Zcomponent_Z": new VectorXYZInput_Zcomponent_Z(),
		}
		this.output = {
			"Vector_V": new VectorXYZOutput_Vector_V(),
			"Length_L": new VectorXYZOutput_Length_L(),
		}
	}

}

class VectorXYZInput_Xcomponent_X extends ResthopperParameter {

	public name: string = "Xcomponent";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZInput_Ycomponent_Y extends ResthopperParameter {

	public name: string = "Ycomponent";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZInput_Zcomponent_Z extends ResthopperParameter {

	public name: string = "Zcomponent";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorXYZOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
