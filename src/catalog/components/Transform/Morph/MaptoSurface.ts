import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MaptoSurface extends ResthopperComponent {

	public guid: string = "fc5b7d12-7247-4de0-81bc-9b2c2f8f72f6";
	public name: string = "MaptoSurface";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Map a curve onto a surface via control points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curve_C": MaptoSurfaceInput_Curve_C,
		"Source_S": MaptoSurfaceInput_Source_S,
		"Target_T": MaptoSurfaceInput_Target_T,
	}

	public output:
	{
		"Curve_C": MaptoSurfaceOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new MaptoSurfaceInput_Curve_C(),
			"Source_S": new MaptoSurfaceInput_Source_S(),
			"Target_T": new MaptoSurfaceInput_Target_T(),
		}
		this.output = {
			"Curve_C": new MaptoSurfaceOutput_Curve_C(),
		}
	}

}

class MaptoSurfaceInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaptoSurfaceInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaptoSurfaceInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaptoSurfaceOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
