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
		"curve_c": MaptoSurfaceInput_curve_c,
		"source_s": MaptoSurfaceInput_source_s,
		"target_t": MaptoSurfaceInput_target_t,
	}

	public output:
	{
		"curve_c": MaptoSurfaceOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new MaptoSurfaceInput_curve_c(),
			"source_s": new MaptoSurfaceInput_source_s(),
			"target_t": new MaptoSurfaceInput_target_t(),
		}
		this.output = {
			"curve_c": new MaptoSurfaceOutput_curve_c(),
		}
	}

}

class MaptoSurfaceInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaptoSurfaceInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaptoSurfaceInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaptoSurfaceOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
