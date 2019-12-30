import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineLine extends ResthopperComponent {

	public guid: string = "d788ad7f-6d68-4106-8b2f-9e55e6e107c0";
	public name: string = "Line + Line";
	public nickName: string = "LnLn";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane from two line segments.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"linea_a": LineLineInput_linea_a,
		"lineb_b": LineLineInput_lineb_b,
	}

	public output:
	{
		"plane_pl": LineLineOutput_plane_pl,
	}

	constructor() {
		super();
		this.input = {
			"linea_a": new LineLineInput_linea_a(),
			"lineb_b": new LineLineInput_lineb_b(),
		}
		this.output = {
			"plane_pl": new LineLineOutput_plane_pl(),
		}
	}

}

class LineLineInput_linea_a extends ResthopperParameter {

	public name: string = "LineA";
	public nickName: string = "A";
	public description: string = "First line constraint. Plane origin will be at line start."
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineInput_lineb_b extends ResthopperParameter {

	public name: string = "LineB";
	public nickName: string = "B";
	public description: string = "Second line constraint. Line B should be co-planar with but not parallel to Line A."
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public description: string = "Plane definition"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
