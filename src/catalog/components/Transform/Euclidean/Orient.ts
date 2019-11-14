import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Orient extends ResthopperComponent {

	public guid: string = "378d0690-9da0-4dd1-ab16-1d15246e7c22";
	public name: string = "Orient";
	public nickName: string = "Orient";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Orient an object. Orientation is sometimes called a 'ChangeBasis tranformation'. It allows for remapping of geometry from one axis-system to another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": OrientInput_geometry_g,
		"source_a": OrientInput_source_a,
		"target_b": OrientInput_target_b,
	}

	public output:
	{
		"geometry_g": OrientOutput_geometry_g,
		"transform_x": OrientOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new OrientInput_geometry_g(),
			"source_a": new OrientInput_source_a(),
			"target_b": new OrientInput_target_b(),
		}
		this.output = {
			"geometry_g": new OrientOutput_geometry_g(),
			"transform_x": new OrientOutput_transform_x(),
		}
	}

}

class OrientInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientInput_source_a extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientInput_target_b extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
