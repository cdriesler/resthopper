import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProjectPoint extends ResthopperComponent {

	public guid: string = "5184b8cb-b71e-4def-a590-cd2c9bc58906";
	public name: string = "ProjectPoint";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Project a point onto a collection of shapes";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"point_p": ProjectPointInput_point_p,
		"direction_d": ProjectPointInput_direction_d,
		"geometry_g": ProjectPointInput_geometry_g,
	}

	public output:
	{
		"point_p": ProjectPointOutput_point_p,
		"index_i": ProjectPointOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new ProjectPointInput_point_p(),
			"direction_d": new ProjectPointInput_direction_d(),
			"geometry_g": new ProjectPointInput_geometry_g(),
		}
		this.output = {
			"point_p": new ProjectPointOutput_point_p(),
			"index_i": new ProjectPointOutput_index_i(),
		}
	}

}

class ProjectPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
