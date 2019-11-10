import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BendDeform extends ResthopperComponent {

	public guid: string = "539f5564-4fc0-4fc1-a7d3-b802fa2ef072";
	public name: string = "BendDeform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deform a shape by bending it";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": BendDeformInput_Geometry_G,
		"BendingArc_B": BendDeformInput_BendingArc_B,
	}

	public output:
	{
		"Geometry_G": BendDeformOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new BendDeformInput_Geometry_G(),
			"BendingArc_B": new BendDeformInput_BendingArc_B(),
		}
		this.output = {
			"Geometry_G": new BendDeformOutput_Geometry_G(),
		}
	}

}

class BendDeformInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BendDeformInput_BendingArc_B extends ResthopperParameter {

	public name: string = "BendingArc";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BendDeformOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
