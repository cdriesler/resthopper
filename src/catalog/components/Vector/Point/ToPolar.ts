import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ToPolar extends ResthopperComponent {

	public guid: string = "61647ba2-31eb-4921-9632-df81e3286f7d";
	public name: string = "To Polar";
	public nickName: string = "Polar";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a 3D point to plane polar coordinates.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": ToPolarInput_point_p,
		"system_s": ToPolarInput_system_s,
	}

	public output:
	{
		"phi_p": ToPolarOutput_phi_p,
		"theta_t": ToPolarOutput_theta_t,
		"radius_r": ToPolarOutput_radius_r,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new ToPolarInput_point_p(),
			"system_s": new ToPolarInput_system_s(),
		}
		this.output = {
			"phi_p": new ToPolarOutput_phi_p(),
			"theta_t": new ToPolarOutput_theta_t(),
			"radius_r": new ToPolarOutput_radius_r(),
		}
	}

}

class ToPolarInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "3D point to transcribe"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarInput_system_s extends ResthopperParameter {

	public name: string = "System";
	public nickName: string = "S";
	public description: string = "Plane defining polar coordinate space"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarOutput_phi_p extends ResthopperParameter {

	public name: string = "Phi";
	public nickName: string = "P";
	public description: string = "Planar angle in radians (counter-clockwise starting at the plane X-axis)"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarOutput_theta_t extends ResthopperParameter {

	public name: string = "Theta";
	public nickName: string = "T";
	public description: string = "Vertical angle in radians"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public description: string = "Distance from system origin to point"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
