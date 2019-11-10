import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProjectAlong extends ResthopperComponent {

	public guid: string = "06d7bc4a-ba3e-4445-8ab5-079613b52f28";
	public name: string = "ProjectAlong";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Project an object onto a plane along a direction.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": ProjectAlongInput_Geometry_G,
		"Plane_P": ProjectAlongInput_Plane_P,
		"Direction_D": ProjectAlongInput_Direction_D,
	}

	public output:
	{
		"Geometry_G": ProjectAlongOutput_Geometry_G,
		"Transform_X": ProjectAlongOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new ProjectAlongInput_Geometry_G(),
			"Plane_P": new ProjectAlongInput_Plane_P(),
			"Direction_D": new ProjectAlongInput_Direction_D(),
		}
		this.output = {
			"Geometry_G": new ProjectAlongOutput_Geometry_G(),
			"Transform_X": new ProjectAlongOutput_Transform_X(),
		}
	}

}

class ProjectAlongInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
