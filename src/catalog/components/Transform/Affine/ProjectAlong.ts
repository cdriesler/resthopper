import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProjectAlong extends ResthopperComponent {

	public guid: string = "06d7bc4a-ba3e-4445-8ab5-079613b52f28";
	public name: string = "Project Along";
	public nickName: string = "ProjectA";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Project an object onto a plane along a direction.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": ProjectAlongInput_geometry_g,
		"plane_p": ProjectAlongInput_plane_p,
		"direction_d": ProjectAlongInput_direction_d,
	}

	public output:
	{
		"geometry_g": ProjectAlongOutput_geometry_g,
		"transform_x": ProjectAlongOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new ProjectAlongInput_geometry_g(),
			"plane_p": new ProjectAlongInput_plane_p(),
			"direction_d": new ProjectAlongInput_direction_d(),
		}
		this.output = {
			"geometry_g": new ProjectAlongOutput_geometry_g(),
			"transform_x": new ProjectAlongOutput_transform_x(),
		}
	}

}

class ProjectAlongInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Geometry to project"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Projection plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public description: string = "Projection direction"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Projected geometry"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectAlongOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Transformation data"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
