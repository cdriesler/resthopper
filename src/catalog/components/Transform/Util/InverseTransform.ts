import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InverseTransform extends ResthopperComponent {

	public guid: string = "51f61166-7202-45aa-9126-3d83055b269e";
	public name: string = "InverseTransform";
	public nickName: string = "Inverse";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Invert a transformation.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"transform_t": InverseTransformInput_transform_t,
	}

	public output:
	{
		"transform_t": InverseTransformOutput_transform_t,
	}

	constructor() {
		super();
		this.input = {
			"transform_t": new InverseTransformInput_transform_t(),
		}
		this.output = {
			"transform_t": new InverseTransformOutput_transform_t(),
		}
	}

}

class InverseTransformInput_transform_t extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InverseTransformOutput_transform_t extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
