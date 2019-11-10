import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeLinear extends ResthopperComponent {

	public guid: string = "8efd5eb9-a896-486e-9f98-d8d1a07a49f3";
	public name: string = "ExtrudeLinear";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a straight path.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Profile_P": ExtrudeLinearInput_Profile_P,
		"OrientationP_Po": ExtrudeLinearInput_OrientationP_Po,
		"Axis_A": ExtrudeLinearInput_Axis_A,
		"OrientationA_Ao": ExtrudeLinearInput_OrientationA_Ao,
	}

	public output:
	{
		"Extrusion_E": ExtrudeLinearOutput_Extrusion_E,
	}

	constructor() {
		super();
		this.input = {
			"Profile_P": new ExtrudeLinearInput_Profile_P(),
			"OrientationP_Po": new ExtrudeLinearInput_OrientationP_Po(),
			"Axis_A": new ExtrudeLinearInput_Axis_A(),
			"OrientationA_Ao": new ExtrudeLinearInput_OrientationA_Ao(),
		}
		this.output = {
			"Extrusion_E": new ExtrudeLinearOutput_Extrusion_E(),
		}
	}

}

class ExtrudeLinearInput_Profile_P extends ResthopperParameter {

	public name: string = "Profile";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearInput_OrientationP_Po extends ResthopperParameter {

	public name: string = "OrientationP";
	public nickName: string = "Po";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearInput_Axis_A extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearInput_OrientationA_Ao extends ResthopperParameter {

	public name: string = "OrientationA";
	public nickName: string = "Ao";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeLinearOutput_Extrusion_E extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
