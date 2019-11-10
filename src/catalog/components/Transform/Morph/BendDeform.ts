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
		"geometry_g": BendDeformInput_geometry_g,
		"bendingarc_b": BendDeformInput_bendingarc_b,
	}

	public output:
	{
		"geometry_g": BendDeformOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new BendDeformInput_geometry_g(),
			"bendingarc_b": new BendDeformInput_bendingarc_b(),
		}
		this.output = {
			"geometry_g": new BendDeformOutput_geometry_g(),
		}
	}

}

class BendDeformInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BendDeformInput_bendingarc_b extends ResthopperParameter {

	public name: string = "BendingArc";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BendDeformOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
