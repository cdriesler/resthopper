import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepTopology extends ResthopperComponent {

	public guid: string = "866ee39d-9ebf-4e1d-b209-324c56825605";
	public name: string = "BrepTopology";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get and display the topology of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": BrepTopologyInput_Brep_B,
	}

	public output:
	{
		"FaceFaceAdjacency_FF": BrepTopologyOutput_FaceFaceAdjacency_FF,
		"FaceEdgeAdjacency_FE": BrepTopologyOutput_FaceEdgeAdjacency_FE,
		"EdgeFaceAdjacency_EF": BrepTopologyOutput_EdgeFaceAdjacency_EF,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new BrepTopologyInput_Brep_B(),
		}
		this.output = {
			"FaceFaceAdjacency_FF": new BrepTopologyOutput_FaceFaceAdjacency_FF(),
			"FaceEdgeAdjacency_FE": new BrepTopologyOutput_FaceEdgeAdjacency_FE(),
			"EdgeFaceAdjacency_EF": new BrepTopologyOutput_EdgeFaceAdjacency_EF(),
		}
	}

}

class BrepTopologyInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepTopologyOutput_FaceFaceAdjacency_FF extends ResthopperParameter {

	public name: string = "FaceFaceAdjacency";
	public nickName: string = "FF";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepTopologyOutput_FaceEdgeAdjacency_FE extends ResthopperParameter {

	public name: string = "FaceEdgeAdjacency";
	public nickName: string = "FE";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepTopologyOutput_EdgeFaceAdjacency_EF extends ResthopperParameter {

	public name: string = "EdgeFaceAdjacency";
	public nickName: string = "EF";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
