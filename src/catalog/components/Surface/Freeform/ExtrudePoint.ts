import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudePoint extends ResthopperComponent {

	public guid: string = "be6636b2-2f1a-4d42-897b-fdef429b6f17";
	public name: string = "ExtrudePoint";
	public nickName: string = "Extr";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces to a point.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": ExtrudePointInput_base_b,
		"point_p": ExtrudePointInput_point_p,
	}

	public output:
	{
		"extrusion_e": ExtrudePointOutput_extrusion_e,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new ExtrudePointInput_base_b(),
			"point_p": new ExtrudePointInput_point_p(),
		}
		this.output = {
			"extrusion_e": new ExtrudePointOutput_extrusion_e(),
		}
	}

}

class ExtrudePointInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudePointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudePointOutput_extrusion_e extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
