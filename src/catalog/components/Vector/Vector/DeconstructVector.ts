import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructVector extends ResthopperComponent {

	public guid: string = "a50fcd4a-cf42-4c3f-8616-022761e6cc93";
	public name: string = "DeconstructVector";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Deconstruct a vector into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Vector_V": DeconstructVectorInput_Vector_V,
	}

	public output:
	{
		"Xcomponent_X": DeconstructVectorOutput_Xcomponent_X,
		"Ycomponent_Y": DeconstructVectorOutput_Ycomponent_Y,
		"Zcomponent_Z": DeconstructVectorOutput_Zcomponent_Z,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new DeconstructVectorInput_Vector_V(),
		}
		this.output = {
			"Xcomponent_X": new DeconstructVectorOutput_Xcomponent_X(),
			"Ycomponent_Y": new DeconstructVectorOutput_Ycomponent_Y(),
			"Zcomponent_Z": new DeconstructVectorOutput_Zcomponent_Z(),
		}
	}

}

class DeconstructVectorInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructVectorOutput_Xcomponent_X extends ResthopperParameter {

	public name: string = "Xcomponent";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructVectorOutput_Ycomponent_Y extends ResthopperParameter {

	public name: string = "Ycomponent";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructVectorOutput_Zcomponent_Z extends ResthopperParameter {

	public name: string = "Zcomponent";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
