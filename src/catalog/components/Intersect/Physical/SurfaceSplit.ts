import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceSplit extends ResthopperComponent {

	public guid: string = "7db14002-c09c-4d7b-9f80-e4e2b00dfa1d";
	public name: string = "SurfaceSplit";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Split a surface with a bunch of curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": SurfaceSplitInput_Surface_S,
		"Curves_C": SurfaceSplitInput_Curves_C,
	}

	public output:
	{
		"Fragments_F": SurfaceSplitOutput_Fragments_F,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceSplitInput_Surface_S(),
			"Curves_C": new SurfaceSplitInput_Curves_C(),
		}
		this.output = {
			"Fragments_F": new SurfaceSplitOutput_Fragments_F(),
		}
	}

}

class SurfaceSplitInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceSplitInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceSplitOutput_Fragments_F extends ResthopperParameter {

	public name: string = "Fragments";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
