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
		"brep_b": ConvexEdgesInput_brep_b,
	}

	public output:
	{
		"convex_cv": ConvexEdgesOutput_convex_cv,
		"concave_cc": ConvexEdgesOutput_concave_cc,
		"mixed_mx": ConvexEdgesOutput_mixed_mx,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new ConvexEdgesInput_brep_b(),
		}
		this.output = {
			"convex_cv": new ConvexEdgesOutput_convex_cv(),
			"concave_cc": new ConvexEdgesOutput_concave_cc(),
			"mixed_mx": new ConvexEdgesOutput_mixed_mx(),
		}
	}

}

class ConvexEdgesInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexEdgesOutput_convex_cv extends ResthopperParameter {

	public name: string = "Convex";
	public nickName: string = "Cv";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexEdgesOutput_concave_cc extends ResthopperParameter {

	public name: string = "Concave";
	public nickName: string = "Cc";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexEdgesOutput_mixed_mx extends ResthopperParameter {

	public name: string = "Mixed";
	public nickName: string = "Mx";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
