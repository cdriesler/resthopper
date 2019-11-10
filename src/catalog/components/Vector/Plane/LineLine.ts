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
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineInput_lineb_b extends ResthopperParameter {

	public name: string = "LineB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
