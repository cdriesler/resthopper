import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Project extends ResthopperComponent {

	public guid: string = "23285717-156c-468f-a691-b242488c06a6";
	public name: string = "Project";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Project an object onto a plane.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": ProjectInput_Geometry_G,
		"Plane_P": ProjectInput_Plane_P,
	}

	public output:
	{
		"Geometry_G": ProjectOutput_Geometry_G,
		"Transform_X": ProjectOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new ProjectInput_Geometry_G(),
			"Plane_P": new ProjectInput_Plane_P(),
		}
		this.output = {
			"Geometry_G": new ProjectOutput_Geometry_G(),
			"Transform_X": new ProjectOutput_Transform_X(),
		}
	}

}

class ProjectInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
