import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OcTree extends ResthopperComponent {

	public guid: string = "a59a68ad-fdd6-41dd-88f0-d7a6fb8d2e16";
	public name: string = "OcTree";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A three-dimensional oc-tree structure";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": OcTreeInput_Points_P,
		"Square_S": OcTreeInput_Square_S,
		"Group_G": OcTreeInput_Group_G,
	}

	public output:
	{
		"Boxes_B": OcTreeOutput_Boxes_B,
		"Points_P": OcTreeOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new OcTreeInput_Points_P(),
			"Square_S": new OcTreeInput_Square_S(),
			"Group_G": new OcTreeInput_Group_G(),
		}
		this.output = {
			"Boxes_B": new OcTreeOutput_Boxes_B(),
			"Points_P": new OcTreeOutput_Points_P(),
		}
	}

}

class OcTreeInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeInput_Square_S extends ResthopperParameter {

	public name: string = "Square";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeInput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeOutput_Boxes_B extends ResthopperParameter {

	public name: string = "Boxes";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcTreeOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
