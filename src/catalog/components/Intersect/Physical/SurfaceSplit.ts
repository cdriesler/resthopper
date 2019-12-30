import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceSplit extends ResthopperComponent {

	public guid: string = "7db14002-c09c-4d7b-9f80-e4e2b00dfa1d";
	public name: string = "Surface Split";
	public nickName: string = "SrfSplit";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Split a surface with a bunch of curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": SurfaceSplitInput_surface_s,
		"curves_c": SurfaceSplitInput_curves_c,
	}

	public output:
	{
		"fragments_f": SurfaceSplitOutput_fragments_f,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceSplitInput_surface_s(),
			"curves_c": new SurfaceSplitInput_curves_c(),
		}
		this.output = {
			"fragments_f": new SurfaceSplitOutput_fragments_f(),
		}
	}

}

class SurfaceSplitInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Base surface"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceSplitInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Splitting curves"
	public isOptional: boolean = true;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceSplitOutput_fragments_f extends ResthopperParameter {

	public name: string = "Fragments";
	public nickName: string = "F";
	public description: string = "Splitting fragments"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
