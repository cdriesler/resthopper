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
		"vector_v": DeconstructVectorInput_vector_v,
	}

	public output:
	{
		"xcomponent_x": DeconstructVectorOutput_xcomponent_x,
		"ycomponent_y": DeconstructVectorOutput_ycomponent_y,
		"zcomponent_z": DeconstructVectorOutput_zcomponent_z,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new DeconstructVectorInput_vector_v(),
		}
		this.output = {
			"xcomponent_x": new DeconstructVectorOutput_xcomponent_x(),
			"ycomponent_y": new DeconstructVectorOutput_ycomponent_y(),
			"zcomponent_z": new DeconstructVectorOutput_zcomponent_z(),
		}
	}

}

class DeconstructVectorInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructVectorOutput_xcomponent_x extends ResthopperParameter {

	public name: string = "Xcomponent";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructVectorOutput_ycomponent_y extends ResthopperParameter {

	public name: string = "Ycomponent";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructVectorOutput_zcomponent_z extends ResthopperParameter {

	public name: string = "Zcomponent";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
