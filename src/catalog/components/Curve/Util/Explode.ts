import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Explode extends ResthopperComponent {

	public guid: string = "afb96615-c59a-45c9-9cac-e27acb1c7ca0";
	public name: string = "Explode";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Explode a curve into smaller segments.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": ExplodeInput_Curve_C,
		"Recursive_R": ExplodeInput_Recursive_R,
	}

	public output:
	{
		"Segments_S": ExplodeOutput_Segments_S,
		"Vertices_V": ExplodeOutput_Vertices_V,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ExplodeInput_Curve_C(),
			"Recursive_R": new ExplodeInput_Recursive_R(),
		}
		this.output = {
			"Segments_S": new ExplodeOutput_Segments_S(),
			"Vertices_V": new ExplodeOutput_Vertices_V(),
		}
	}

}

class ExplodeInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeInput_Recursive_R extends ResthopperParameter {

	public name: string = "Recursive";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeOutput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeOutput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
