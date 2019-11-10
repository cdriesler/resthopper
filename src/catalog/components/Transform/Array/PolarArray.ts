import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolarArray extends ResthopperComponent {

	public guid: string = "fca5ad7e-ecac-401d-a357-edda0a251cbc";
	public name: string = "PolarArray";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a polar array of geometry.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": PolarArrayInput_geometry_g,
		"plane_p": PolarArrayInput_plane_p,
		"count_n": PolarArrayInput_count_n,
		"angle_a": PolarArrayInput_angle_a,
	}

	public output:
	{
		"geometry_g": PolarArrayOutput_geometry_g,
		"transform_x": PolarArrayOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new PolarArrayInput_geometry_g(),
			"plane_p": new PolarArrayInput_plane_p(),
			"count_n": new PolarArrayInput_count_n(),
			"angle_a": new PolarArrayInput_angle_a(),
		}
		this.output = {
			"geometry_g": new PolarArrayOutput_geometry_g(),
			"transform_x": new PolarArrayOutput_transform_x(),
		}
	}

}

class PolarArrayInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
