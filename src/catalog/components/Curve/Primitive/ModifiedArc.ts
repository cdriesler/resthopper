import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ModifiedArc extends ResthopperComponent {

	public guid: string = "9d8dec9c-3fd1-481c-9c3d-75ea5e15eb1a";
	public name: string = "ModifiedArc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc based on another arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"angle_a": ModifiedArcInput_angle_a,
		"radius_r": ModifiedArcInput_radius_r,
	}

	public output:
	{
		"arc_a": ModifiedArcOutput_arc_a,
	}

	constructor() {
		super();
		this.input = {
			"angle_a": new ModifiedArcInput_angle_a(),
			"radius_r": new ModifiedArcInput_radius_r(),
		}
		this.output = {
			"arc_a": new ModifiedArcOutput_arc_a(),
		}
	}

}

class ModifiedArcInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModifiedArcInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModifiedArcOutput_arc_a extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
