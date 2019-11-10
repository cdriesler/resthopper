import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConvexEdges extends ResthopperComponent {

	public guid: string = "8248da39-0729-4e04-8395-267b3259bc2f";
	public name: string = "ConvexEdges";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select concave or convex brep edges.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Brep_B": ConvexEdgesInput_Brep_B,
	}

	public output:
	{
		"Convex_Cv": ConvexEdgesOutput_Convex_Cv,
		"Concave_Cc": ConvexEdgesOutput_Concave_Cc,
		"Mixed_Mx": ConvexEdgesOutput_Mixed_Mx,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new ConvexEdgesInput_Brep_B(),
		}
		this.output = {
			"Convex_Cv": new ConvexEdgesOutput_Convex_Cv(),
			"Concave_Cc": new ConvexEdgesOutput_Concave_Cc(),
			"Mixed_Mx": new ConvexEdgesOutput_Mixed_Mx(),
		}
	}

}

class ConvexEdgesInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexEdgesOutput_Convex_Cv extends ResthopperParameter {

	public name: string = "Convex";
	public nickName: string = "Cv";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexEdgesOutput_Concave_Cc extends ResthopperParameter {

	public name: string = "Concave";
	public nickName: string = "Cc";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexEdgesOutput_Mixed_Mx extends ResthopperParameter {

	public name: string = "Mixed";
	public nickName: string = "Mx";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
