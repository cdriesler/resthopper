import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OcTree extends ResthopperComponent {

	public guid: string = "a59a68ad-fdd6-41dd-88f0-d7a6fb8d2e16";
	public name: string = "OcTree";
	public nickName: string = "OcT";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A three-dimensional oc-tree structure";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": OcTreeInput_points_p,
		"square_s": OcTreeInput_square_s,
		"group_g": OcTreeInput_group_g,
	}

	public output:
	{
		"boxes_b": OcTreeOutput_boxes_b,
		"points_p": OcTreeOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new OcTreeInput_points_p(),
			"square_s": new OcTreeInput_square_s(),
			"group_g": new OcTreeInput_group_g(),
		}
		this.output = {
			"boxes_b": new OcTreeOutput_boxes_b(),
			"points_p": new OcTreeOutput_points_p(),
		}
	}

}

class OcTreeInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeInput_square_s extends ResthopperParameter {

	public name: string = "Square";
	public nickName: string = "S";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeInput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeOutput_boxes_b extends ResthopperParameter {

	public name: string = "Boxes";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
