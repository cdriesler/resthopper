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

	public library: string = "Triangulation Components";

	public input:
	{
		"Point_P": ProjectPointInput_Point_P,
		"Direction_D": ProjectPointInput_Direction_D,
		"Geometry_G": ProjectPointInput_Geometry_G,
	}

	public output:
	{
		"Point_P": ProjectPointOutput_Point_P,
		"Index_I": ProjectPointOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new ProjectPointInput_Point_P(),
			"Direction_D": new ProjectPointInput_Direction_D(),
			"Geometry_G": new ProjectPointInput_Geometry_G(),
		}
		this.output = {
			"Point_P": new ProjectPointOutput_Point_P(),
			"Index_I": new ProjectPointOutput_Index_I(),
		}
	}

}

class ProjectPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProjectPointOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
