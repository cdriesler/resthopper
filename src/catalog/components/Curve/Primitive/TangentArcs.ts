import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentArcs extends ResthopperComponent {

	public guid: string = "f1c0783b-60e9-42a7-8081-925bc755494c";
	public name: string = "Tangent Arcs";
	public nickName: string = "TArc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create tangent arcs between circles";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"circlea_a": TangentArcsInput_circlea_a,
		"circleb_b": TangentArcsInput_circleb_b,
		"radius_r": TangentArcsInput_radius_r,
	}

	public output:
	{
		"arca_a": TangentArcsOutput_arca_a,
		"arcb_b": TangentArcsOutput_arcb_b,
	}

	constructor() {
		super();
		this.input = {
			"circlea_a": new TangentArcsInput_circlea_a(),
			"circleb_b": new TangentArcsInput_circleb_b(),
			"radius_r": new TangentArcsInput_radius_r(),
		}
		this.output = {
			"arca_a": new TangentArcsOutput_arca_a(),
			"arcb_b": new TangentArcsOutput_arcb_b(),
		}
	}

}

class TangentArcsInput_circlea_a extends ResthopperParameter {

	public name: string = "CircleA";
	public nickName: string = "A";
	public description: string = "Empty Circle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsInput_circleb_b extends ResthopperParameter {

	public name: string = "CircleB";
	public nickName: string = "B";
	public description: string = "Empty Circle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsOutput_arca_a extends ResthopperParameter {

	public name: string = "ArcA";
	public nickName: string = "A";
	public description: string = "Empty Arc parameter"
	public isOptional: boolean = false;
	public typeName: string = "Arc"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentArcsOutput_arcb_b extends ResthopperParameter {

	public name: string = "ArcB";
	public nickName: string = "B";
	public description: string = "Empty Arc parameter"
	public isOptional: boolean = false;
	public typeName: string = "Arc"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
