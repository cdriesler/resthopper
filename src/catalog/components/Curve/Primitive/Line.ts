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

	public library: string = "Curve Components";

	public input:
	{
		"StartPoint_A": LineInput_StartPoint_A,
		"EndPoint_B": LineInput_EndPoint_B,
	}

	public output:
	{
		"Line_L": LineOutput_Line_L,
	}

	constructor() {
		super();
		this.input = {
			"StartPoint_A": new LineInput_StartPoint_A(),
			"EndPoint_B": new LineInput_EndPoint_B(),
		}
		this.output = {
			"Line_L": new LineOutput_Line_L(),
		}
	}

}

class LineInput_StartPoint_A extends ResthopperParameter {

	public name: string = "StartPoint";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineInput_EndPoint_B extends ResthopperParameter {

	public name: string = "EndPoint";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
