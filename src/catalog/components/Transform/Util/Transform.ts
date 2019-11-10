import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Transform extends ResthopperComponent {

	public guid: string = "610e689b-5adc-47b3-af8f-e3a32b7ea341";
	public name: string = "Transform";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Transform an object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": TransformInput_Geometry_G,
		"Transform_T": TransformInput_Transform_T,
	}

	public output:
	{
		"Geometry_G": TransformOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new TransformInput_Geometry_G(),
			"Transform_T": new TransformInput_Transform_T(),
		}
		this.output = {
			"Geometry_G": new TransformOutput_Geometry_G(),
		}
	}

}

class TransformInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TransformInput_Transform_T extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TransformOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
