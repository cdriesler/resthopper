import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceInflection extends ResthopperComponent {

	public guid: string = "0efd7f0c-f63d-446d-970e-9fb0e636ea41";
	public name: string = "SurfaceInflection";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Compute the inflection curves for a surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": SurfaceInflectionInput_Surface_S,
		"Tolerance_T": SurfaceInflectionInput_Tolerance_T,
	}

	public output:
	{
		"Curves_C": SurfaceInflectionOutput_Curves_C,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceInflectionInput_Surface_S(),
			"Tolerance_T": new SurfaceInflectionInput_Tolerance_T(),
		}
		this.output = {
			"Curves_C": new SurfaceInflectionOutput_Curves_C(),
		}
	}

}

class SurfaceInflectionInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceInflectionInput_Tolerance_T extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceInflectionOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
