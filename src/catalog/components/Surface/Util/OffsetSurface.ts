import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetSurface extends ResthopperComponent {

	public guid: string = "b25c5762-f90e-4839-9fc5-74b74ab42b1e";
	public name: string = "OffsetSurface";
	public nickName: string = "Offset";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Offset a surface by a fixed amount.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": OffsetSurfaceInput_surface_s,
		"distance_d": OffsetSurfaceInput_distance_d,
		"retrim_t": OffsetSurfaceInput_retrim_t,
	}

	public output:
	{
		"surface_s": OffsetSurfaceOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new OffsetSurfaceInput_surface_s(),
			"distance_d": new OffsetSurfaceInput_distance_d(),
			"retrim_t": new OffsetSurfaceInput_retrim_t(),
		}
		this.output = {
			"surface_s": new OffsetSurfaceOutput_surface_s(),
		}
	}

}

class OffsetSurfaceInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceInput_retrim_t extends ResthopperParameter {

	public name: string = "Retrim";
	public nickName: string = "T";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
