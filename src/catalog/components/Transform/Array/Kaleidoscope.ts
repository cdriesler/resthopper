import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Kaleidoscope extends ResthopperComponent {

	public guid: string = "b90eaa92-6e38-4054-a915-afcf486224b3";
	public name: string = "Kaleidoscope";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Apply a kaleidoscope transformation to an object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": KaleidoscopeInput_Geometry_G,
		"Plane_P": KaleidoscopeInput_Plane_P,
		"Segments_S": KaleidoscopeInput_Segments_S,
	}

	public output:
	{
		"Geometry_G": KaleidoscopeOutput_Geometry_G,
		"Transform_X": KaleidoscopeOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new KaleidoscopeInput_Geometry_G(),
			"Plane_P": new KaleidoscopeInput_Plane_P(),
			"Segments_S": new KaleidoscopeInput_Segments_S(),
		}
		this.output = {
			"Geometry_G": new KaleidoscopeOutput_Geometry_G(),
			"Transform_X": new KaleidoscopeOutput_Transform_X(),
		}
	}

}

class KaleidoscopeInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeInput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KaleidoscopeOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
