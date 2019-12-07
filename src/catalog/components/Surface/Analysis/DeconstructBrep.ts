import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructBrep extends ResthopperComponent {

	public guid: string = "8d372bdc-9800-45e9-8a26-6e33c5253e21";
	public name: string = "DeconstructBrep";
	public nickName: string = "DeBrep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a brep into its constituent parts.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": DeconstructBrepInput_brep_b,
	}

	public output:
	{
		"faces_f": DeconstructBrepOutput_faces_f,
		"edges_e": DeconstructBrepOutput_edges_e,
		"vertices_v": DeconstructBrepOutput_vertices_v,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new DeconstructBrepInput_brep_b(),
		}
		this.output = {
			"faces_f": new DeconstructBrepOutput_faces_f(),
			"edges_e": new DeconstructBrepOutput_edges_e(),
			"vertices_v": new DeconstructBrepOutput_vertices_v(),
		}
	}

}

class DeconstructBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBrepOutput_faces_f extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBrepOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBrepOutput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
