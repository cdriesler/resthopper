import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeAngled extends ResthopperComponent {

	public guid: string = "ae57e09b-a1e4-4d05-8491-abd232213bc9";
	public name: string = "Extrude Angled";
	public nickName: string = "ExtrAng";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude a planar polyline at angles";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"polyline_p": ExtrudeAngledInput_polyline_p,
		"baseheight_hb": ExtrudeAngledInput_baseheight_hb,
		"topheight_ht": ExtrudeAngledInput_topheight_ht,
		"angles_a": ExtrudeAngledInput_angles_a,
	}

	public output:
	{
		"shape_s": ExtrudeAngledOutput_shape_s,
	}

	constructor() {
		super();
		this.input = {
			"polyline_p": new ExtrudeAngledInput_polyline_p(),
			"baseheight_hb": new ExtrudeAngledInput_baseheight_hb(),
			"topheight_ht": new ExtrudeAngledInput_topheight_ht(),
			"angles_a": new ExtrudeAngledInput_angles_a(),
		}
		this.output = {
			"shape_s": new ExtrudeAngledOutput_shape_s(),
		}
	}

}

class ExtrudeAngledInput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public description: string = "Polyline base curve"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledInput_baseheight_hb extends ResthopperParameter {

	public name: string = "Baseheight";
	public nickName: string = "Hb";
	public description: string = "Height of vertical portion."
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledInput_topheight_ht extends ResthopperParameter {

	public name: string = "Topheight";
	public nickName: string = "Ht";
	public description: string = "Height of top surface."
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledInput_angles_a extends ResthopperParameter {

	public name: string = "Angles";
	public nickName: string = "A";
	public description: string = "Angles per polyline edge."
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledOutput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public description: string = "Extruded shape"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
