import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineLine extends ResthopperComponent {

	public guid: string = "d788ad7f-6d68-4106-8b2f-9e55e6e107c0";
	public name: string = "LineLine";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane from two line segments.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"LineA_A": LineLineInput_LineA_A,
		"LineB_B": LineLineInput_LineB_B,
	}

	public output:
	{
		"Plane_Pl": LineLineOutput_Plane_Pl,
	}

	constructor() {
		super();
		this.input = {
			"LineA_A": new LineLineInput_LineA_A(),
			"LineB_B": new LineLineInput_LineB_B(),
		}
		this.output = {
			"Plane_Pl": new LineLineOutput_Plane_Pl(),
		}
	}

}

class LineLineInput_LineA_A extends ResthopperParameter {

	public name: string = "LineA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineInput_LineB_B extends ResthopperParameter {

	public name: string = "LineB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
