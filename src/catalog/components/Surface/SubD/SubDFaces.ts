import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDFaces extends ResthopperComponent {

	public guid: string = "83c81431-17bc-4bff-bb85-be0a846bd044";
	public name: string = "Sub-D Faces";
	public nickName: string = "SubDFaces";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all face data from a Sub-D surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"subd_s": SubDFacesInput_subd_s,
	}

	public output:
	{
		"point_p": SubDFacesOutput_point_p,
		"count_c": SubDFacesOutput_count_c,
		"edges_e": SubDFacesOutput_edges_e,
		"vertices_v": SubDFacesOutput_vertices_v,
	}

	constructor() {
		super();
		this.input = {
			"subd_s": new SubDFacesInput_subd_s(),
		}
		this.output = {
			"point_p": new SubDFacesOutput_point_p(),
			"count_c": new SubDFacesOutput_count_c(),
			"edges_e": new SubDFacesOutput_edges_e(),
			"vertices_v": new SubDFacesOutput_vertices_v(),
		}
	}

}

class SubDFacesInput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public description: string = "Subdivision surface"
	public isOptional: boolean = false;
	public typeName: string = "SubD"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Face centre point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_count_c extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public description: string = "Number of edges (and vertices) which surround this face."
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public description: string = "Edge identifiers"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public description: string = "Vertex identifiers"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
