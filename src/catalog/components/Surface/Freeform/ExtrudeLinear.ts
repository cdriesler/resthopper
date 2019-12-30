import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeLinear extends ResthopperComponent {

	public guid: string = "8efd5eb9-a896-486e-9f98-d8d1a07a49f3";
	public name: string = "Extrude Linear";
	public nickName: string = "Extrude";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a straight path.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"profile_p": ExtrudeLinearInput_profile_p,
		"orientationp_po": ExtrudeLinearInput_orientationp_po,
		"axis_a": ExtrudeLinearInput_axis_a,
		"orientationa_ao": ExtrudeLinearInput_orientationa_ao,
	}

	public output:
	{
		"extrusion_e": ExtrudeLinearOutput_extrusion_e,
	}

	constructor() {
		super();
		this.input = {
			"profile_p": new ExtrudeLinearInput_profile_p(),
			"orientationp_po": new ExtrudeLinearInput_orientationp_po(),
			"axis_a": new ExtrudeLinearInput_axis_a(),
			"orientationa_ao": new ExtrudeLinearInput_orientationa_ao(),
		}
		this.output = {
			"extrusion_e": new ExtrudeLinearOutput_extrusion_e(),
		}
	}

}

class ExtrudeLinearInput_profile_p extends ResthopperParameter {

	public name: string = "Profile";
	public nickName: string = "P";
	public description: string = "Profile curve or surface"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearInput_orientationp_po extends ResthopperParameter {

	public name: string = "OrientationP";
	public nickName: string = "Po";
	public description: string = "Plane indicating orientation of profile shape"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearInput_axis_a extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "A";
	public description: string = "Extrusion axis"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearInput_orientationa_ao extends ResthopperParameter {

	public name: string = "OrientationA";
	public nickName: string = "Ao";
	public description: string = "Optional orientational plane for the axis"
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearOutput_extrusion_e extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public description: string = "Extrusion result"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
