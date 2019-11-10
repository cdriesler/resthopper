import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructArc extends ResthopperComponent {

	public guid: string = "23862862-049a-40be-b558-2418aacbd916";
	public name: string = "DeconstructArc";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Retrieve the base plane, radius and angle domain of an arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"arc_a": DeconstructArcInput_arc_a,
	}

	public output:
	{
		"baseplane_b": DeconstructArcOutput_baseplane_b,
		"radius_r": DeconstructArcOutput_radius_r,
		"angle_a": DeconstructArcOutput_angle_a,
	}

	constructor() {
		super();
		this.input = {
			"arc_a": new DeconstructArcInput_arc_a(),
		}
		this.output = {
			"baseplane_b": new DeconstructArcOutput_baseplane_b(),
			"radius_r": new DeconstructArcOutput_radius_r(),
			"angle_a": new DeconstructArcOutput_angle_a(),
		}
	}

}

class DeconstructArcInput_arc_a extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructArcOutput_baseplane_b extends ResthopperParameter {

	public name: string = "BasePlane";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructArcOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructArcOutput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
