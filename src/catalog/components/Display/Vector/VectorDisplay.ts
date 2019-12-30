import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorDisplay extends ResthopperComponent {

	public guid: string = "2a3f7078-2e25-4dd4-96f7-0efb491bd61c";
	public name: string = "Vector Display";
	public nickName: string = "VDis";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Preview vectors in the viewport";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"anchor_a": VectorDisplayInput_anchor_a,
		"vector_v": VectorDisplayInput_vector_v,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"anchor_a": new VectorDisplayInput_anchor_a(),
			"vector_v": new VectorDisplayInput_vector_v(),
		}
		this.output = {

		}
	}

}

class VectorDisplayInput_anchor_a extends ResthopperParameter {

	public name: string = "Anchor";
	public nickName: string = "A";
	public description: string = "Anchor point for preview vector"
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public description: string = "Vector to preview"
	public isOptional: boolean = true;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
