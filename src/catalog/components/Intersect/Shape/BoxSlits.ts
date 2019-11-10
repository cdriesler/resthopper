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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"boxes_b": BoxSlitsInput_boxes_b,
		"gap_g": BoxSlitsInput_gap_g,
	}

	public output:
	{
		"breps_b": BoxSlitsOutput_breps_b,
		"topology_t": BoxSlitsOutput_topology_t,
	}

	constructor() {
		super();
		this.input = {
			"boxes_b": new BoxSlitsInput_boxes_b(),
			"gap_g": new BoxSlitsInput_gap_g(),
		}
		this.output = {
			"breps_b": new BoxSlitsOutput_breps_b(),
			"topology_t": new BoxSlitsOutput_topology_t(),
		}
	}

}

class BoxSlitsInput_boxes_b extends ResthopperParameter {

	public name: string = "Boxes";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxSlitsInput_gap_g extends ResthopperParameter {

	public name: string = "Gap";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxSlitsOutput_breps_b extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxSlitsOutput_topology_t extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
