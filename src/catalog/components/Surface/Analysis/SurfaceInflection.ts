import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceInflection extends ResthopperComponent {

	public guid: string = "0efd7f0c-f63d-446d-970e-9fb0e636ea41";
	public name: string = "SurfaceInflection";
	public nickName: string = "SInf";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Compute the inflection curves for a surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": SurfaceInflectionInput_surface_s,
		"tolerance_t": SurfaceInflectionInput_tolerance_t,
	}

	public output:
	{
		"curves_c": SurfaceInflectionOutput_curves_c,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceInflectionInput_surface_s(),
			"tolerance_t": new SurfaceInflectionInput_tolerance_t(),
		}
		this.output = {
			"curves_c": new SurfaceInflectionOutput_curves_c(),
		}
	}

}

class SurfaceInflectionInput_surface_s extends ResthopperParameter {

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

class SurfaceInflectionInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceInflectionOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
