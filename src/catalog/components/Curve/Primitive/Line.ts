import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Line extends ResthopperComponent {

	public guid: string = "4c4e56eb-2f04-43f9-95a3-cc46a14f495a";
	public name: string = "Line";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line between two points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"startpoint_a": LineInput_startpoint_a,
		"endpoint_b": LineInput_endpoint_b,
	}

	public output:
	{
		"line_l": LineOutput_line_l,
	}

	constructor() {
		super();
		this.input = {
			"startpoint_a": new LineInput_startpoint_a(),
			"endpoint_b": new LineInput_endpoint_b(),
		}
		this.output = {
			"line_l": new LineOutput_line_l(),
		}
	}

}

class LineInput_startpoint_a extends ResthopperParameter {

	public name: string = "StartPoint";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineInput_endpoint_b extends ResthopperParameter {

	public name: string = "EndPoint";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
