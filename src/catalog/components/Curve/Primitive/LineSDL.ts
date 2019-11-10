import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineSDL extends ResthopperComponent {

	public guid: string = "4c619bc9-39fd-4717-82a6-1e07ea237bbe";
	public name: string = "LineSDL";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line segment defined by start point, tangent and length.}";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"start_s": LineSDLInput_start_s,
		"direction_d": LineSDLInput_direction_d,
		"length_l": LineSDLInput_length_l,
	}

	public output:
	{
		"line_l": LineSDLOutput_line_l,
	}

	constructor() {
		super();
		this.input = {
			"start_s": new LineSDLInput_start_s(),
			"direction_d": new LineSDLInput_direction_d(),
			"length_l": new LineSDLInput_length_l(),
		}
		this.output = {
			"line_l": new LineSDLOutput_line_l(),
		}
	}

}

class LineSDLInput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineSDLInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineSDLInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineSDLOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
