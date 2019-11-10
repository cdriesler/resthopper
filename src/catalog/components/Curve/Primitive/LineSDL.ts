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
		"Start_S": LineSDLInput_Start_S,
		"Direction_D": LineSDLInput_Direction_D,
		"Length_L": LineSDLInput_Length_L,
	}

	public output:
	{
		"Line_L": LineSDLOutput_Line_L,
	}

	constructor() {
		super();
		this.input = {
			"Start_S": new LineSDLInput_Start_S(),
			"Direction_D": new LineSDLInput_Direction_D(),
			"Length_L": new LineSDLInput_Length_L(),
		}
		this.output = {
			"Line_L": new LineSDLOutput_Line_L(),
		}
	}

}

class LineSDLInput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineSDLInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineSDLInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineSDLOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
