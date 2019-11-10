import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxSlits extends ResthopperComponent {

	public guid: string = "2d3b6ef3-5c26-4e2f-bcb3-8ffb9fb0f7c3";
	public name: string = "BoxSlits";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Add slits to a collection of intersecting boxes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Boxes_B": BoxSlitsInput_Boxes_B,
		"Gap_G": BoxSlitsInput_Gap_G,
	}

	public output:
	{
		"Breps_B": BoxSlitsOutput_Breps_B,
		"Topology_T": BoxSlitsOutput_Topology_T,
	}

	constructor() {
		super();
		this.input = {
			"Boxes_B": new BoxSlitsInput_Boxes_B(),
			"Gap_G": new BoxSlitsInput_Gap_G(),
		}
		this.output = {
			"Breps_B": new BoxSlitsOutput_Breps_B(),
			"Topology_T": new BoxSlitsOutput_Topology_T(),
		}
	}

}

class BoxSlitsInput_Boxes_B extends ResthopperParameter {

	public name: string = "Boxes";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxSlitsInput_Gap_G extends ResthopperParameter {

	public name: string = "Gap";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxSlitsOutput_Breps_B extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxSlitsOutput_Topology_T extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
