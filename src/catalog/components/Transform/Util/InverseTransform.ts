import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InverseTransform extends ResthopperComponent {

	public guid: string = "51f61166-7202-45aa-9126-3d83055b269e";
	public name: string = "InverseTransform";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Invert a transformation.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Transform_T": InverseTransformInput_Transform_T,
	}

	public output:
	{
		"Transform_T": InverseTransformOutput_Transform_T,
	}

	constructor() {
		super();
		this.input = {
			"Transform_T": new InverseTransformInput_Transform_T(),
		}
		this.output = {
			"Transform_T": new InverseTransformOutput_Transform_T(),
		}
	}

}

class InverseTransformInput_Transform_T extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InverseTransformOutput_Transform_T extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
