import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Arc extends ResthopperComponent {

	public guid: string = "bb59bffc-f54c-4682-9778-f6c3fe74fce3";
	public name: string = "Arc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc defined by base plane, radius and angle domain.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": ArcInput_plane_p,
		"radius_r": ArcInput_radius_r,
		"angle_a": ArcInput_angle_a,
	}

	public output:
	{
		"arc_a": ArcOutput_arc_a,
		"length_l": ArcOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new ArcInput_plane_p(),
			"radius_r": new ArcInput_radius_r(),
			"angle_a": new ArcInput_angle_a(),
		}
		this.output = {
			"arc_a": new ArcOutput_arc_a(),
			"length_l": new ArcOutput_length_l(),
		}
	}

}

class ArcInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcOutput_arc_a extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
