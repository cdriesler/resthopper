import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineLine extends ResthopperComponent {

	public guid: string = "6d4b82a7-8c1d-4bec-af7b-ca321ba4beb1";
	public name: string = "LineLine";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for two lines.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line1_a": LineLineInput_line1_a,
		"line2_b": LineLineInput_line2_b,
	}

	public output:
	{
		"parama_ta": LineLineOutput_parama_ta,
		"paramb_tb": LineLineOutput_paramb_tb,
		"pointa_pa": LineLineOutput_pointa_pa,
		"pointb_pb": LineLineOutput_pointb_pb,
	}

	constructor() {
		super();
		this.input = {
			"line1_a": new LineLineInput_line1_a(),
			"line2_b": new LineLineInput_line2_b(),
		}
		this.output = {
			"parama_ta": new LineLineOutput_parama_ta(),
			"paramb_tb": new LineLineOutput_paramb_tb(),
			"pointa_pa": new LineLineOutput_pointa_pa(),
			"pointb_pb": new LineLineOutput_pointb_pb(),
		}
	}

}

class LineLineInput_line1_a extends ResthopperParameter {

	public name: string = "Line1";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineInput_line2_b extends ResthopperParameter {

	public name: string = "Line2";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_parama_ta extends ResthopperParameter {

	public name: string = "ParamA";
	public nickName: string = "tA";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_paramb_tb extends ResthopperParameter {

	public name: string = "ParamB";
	public nickName: string = "tB";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_pointa_pa extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "pA";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_pointb_pb extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "pB";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
