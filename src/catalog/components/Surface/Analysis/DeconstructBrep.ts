import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructBrep extends ResthopperComponent {

	public guid: string = "8d372bdc-9800-45e9-8a26-6e33c5253e21";
	public name: string = "DeconstructBrep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a brep into its constituent parts.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": DeconstructBrepInput_Brep_B,
	}

	public output:
	{
		"Faces_F": DeconstructBrepOutput_Faces_F,
		"Edges_E": DeconstructBrepOutput_Edges_E,
		"Vertices_V": DeconstructBrepOutput_Vertices_V,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new DeconstructBrepInput_Brep_B(),
		}
		this.output = {
			"Faces_F": new DeconstructBrepOutput_Faces_F(),
			"Edges_E": new DeconstructBrepOutput_Edges_E(),
			"Vertices_V": new DeconstructBrepOutput_Vertices_V(),
		}
	}

}

class DeconstructBrepInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBrepOutput_Faces_F extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBrepOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBrepOutput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
