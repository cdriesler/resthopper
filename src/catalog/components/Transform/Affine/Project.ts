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
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": ProjectInput_geometry_g,
		"plane_p": ProjectInput_plane_p,
	}

	public output:
	{
		"geometry_g": ProjectOutput_geometry_g,
		"transform_x": ProjectOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new ProjectInput_geometry_g(),
			"plane_p": new ProjectInput_plane_p(),
		}
		this.output = {
			"geometry_g": new ProjectOutput_geometry_g(),
			"transform_x": new ProjectOutput_transform_x(),
		}
	}

}

class ProjectInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
