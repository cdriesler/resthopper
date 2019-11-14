import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetSurfaceLoose extends ResthopperComponent {

	public guid: string = "e7e43403-f913-4d83-8aff-5b1c7a7f9fbc";
	public name: string = "OffsetSurfaceLoose";
	public nickName: string = "OffsetL";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Offset a surface by moving the control points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": OffsetSurfaceLooseInput_surface_s,
		"distance_d": OffsetSurfaceLooseInput_distance_d,
		"retrim_t": OffsetSurfaceLooseInput_retrim_t,
	}

	public output:
	{
		"surface_s": OffsetSurfaceLooseOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new OffsetSurfaceLooseInput_surface_s(),
			"distance_d": new OffsetSurfaceLooseInput_distance_d(),
			"retrim_t": new OffsetSurfaceLooseInput_retrim_t(),
		}
		this.output = {
			"surface_s": new OffsetSurfaceLooseOutput_surface_s(),
		}
	}

}

class OffsetSurfaceLooseInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceLooseInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceLooseInput_retrim_t extends ResthopperParameter {

	public name: string = "Retrim";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceLooseOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
