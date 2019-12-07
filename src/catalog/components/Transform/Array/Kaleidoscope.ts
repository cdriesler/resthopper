import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Kaleidoscope extends ResthopperComponent {

	public guid: string = "b90eaa92-6e38-4054-a915-afcf486224b3";
	public name: string = "Kaleidoscope";
	public nickName: string = "KScope";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Apply a kaleidoscope transformation to an object.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": KaleidoscopeInput_geometry_g,
		"plane_p": KaleidoscopeInput_plane_p,
		"segments_s": KaleidoscopeInput_segments_s,
	}

	public output:
	{
		"geometry_g": KaleidoscopeOutput_geometry_g,
		"transform_x": KaleidoscopeOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new KaleidoscopeInput_geometry_g(),
			"plane_p": new KaleidoscopeInput_plane_p(),
			"segments_s": new KaleidoscopeInput_segments_s(),
		}
		this.output = {
			"geometry_g": new KaleidoscopeOutput_geometry_g(),
			"transform_x": new KaleidoscopeOutput_transform_x(),
		}
	}

}

class KaleidoscopeInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeInput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
