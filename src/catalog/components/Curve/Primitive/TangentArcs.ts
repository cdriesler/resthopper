import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentArcs extends ResthopperComponent {

	public guid: string = "f1c0783b-60e9-42a7-8081-925bc755494c";
	public name: string = "TangentArcs";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create tangent arcs between circles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CircleA_A": TangentArcsInput_CircleA_A,
		"CircleB_B": TangentArcsInput_CircleB_B,
		"Radius_R": TangentArcsInput_Radius_R,
	}

	public output:
	{
		"ArcA_A": TangentArcsOutput_ArcA_A,
		"ArcB_B": TangentArcsOutput_ArcB_B,
	}

	constructor() {
		super();
		this.input = {
			"CircleA_A": new TangentArcsInput_CircleA_A(),
			"CircleB_B": new TangentArcsInput_CircleB_B(),
			"Radius_R": new TangentArcsInput_Radius_R(),
		}
		this.output = {
			"ArcA_A": new TangentArcsOutput_ArcA_A(),
			"ArcB_B": new TangentArcsOutput_ArcB_B(),
		}
	}

}

class TangentArcsInput_CircleA_A extends ResthopperParameter {

	public name: string = "CircleA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsInput_CircleB_B extends ResthopperParameter {

	public name: string = "CircleB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsOutput_ArcA_A extends ResthopperParameter {

	public name: string = "ArcA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsOutput_ArcB_B extends ResthopperParameter {

	public name: string = "ArcB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
