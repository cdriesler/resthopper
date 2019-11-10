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
		"curve_c": ExplodeInput_curve_c,
		"recursive_r": ExplodeInput_recursive_r,
	}

	public output:
	{
		"segments_s": ExplodeOutput_segments_s,
		"vertices_v": ExplodeOutput_vertices_v,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ExplodeInput_curve_c(),
			"recursive_r": new ExplodeInput_recursive_r(),
		}
		this.output = {
			"segments_s": new ExplodeOutput_segments_s(),
			"vertices_v": new ExplodeOutput_vertices_v(),
		}
	}

}

class ExplodeInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeInput_recursive_r extends ResthopperParameter {

	public name: string = "Recursive";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeOutput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExplodeOutput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
