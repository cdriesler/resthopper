import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepTopology extends ResthopperComponent {

	public guid: string = "866ee39d-9ebf-4e1d-b209-324c56825605";
	public name: string = "BrepTopology";
	public nickName: string = "Topology";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get and display the topology of a brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": BrepTopologyInput_brep_b,
	}

	public output:
	{
		"facefaceadjacency_ff": BrepTopologyOutput_facefaceadjacency_ff,
		"faceedgeadjacency_fe": BrepTopologyOutput_faceedgeadjacency_fe,
		"edgefaceadjacency_ef": BrepTopologyOutput_edgefaceadjacency_ef,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new BrepTopologyInput_brep_b(),
		}
		this.output = {
			"facefaceadjacency_ff": new BrepTopologyOutput_facefaceadjacency_ff(),
			"faceedgeadjacency_fe": new BrepTopologyOutput_faceedgeadjacency_fe(),
			"edgefaceadjacency_ef": new BrepTopologyOutput_edgefaceadjacency_ef(),
		}
	}

}

class BrepTopologyInput_brep_b extends ResthopperParameter {

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

class BrepTopologyOutput_facefaceadjacency_ff extends ResthopperParameter {

	public name: string = "FaceFaceAdjacency";
	public nickName: string = "FF";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepTopologyOutput_faceedgeadjacency_fe extends ResthopperParameter {

	public name: string = "FaceEdgeAdjacency";
	public nickName: string = "FE";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepTopologyOutput_edgefaceadjacency_ef extends ResthopperParameter {

	public name: string = "EdgeFaceAdjacency";
	public nickName: string = "EF";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
