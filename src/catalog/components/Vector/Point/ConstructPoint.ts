import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructPoint extends ResthopperComponent {

	public guid: string = "3581f42a-9592-4549-bd6b-1c0fc39d067b";
	public name: string = "ConstructPoint";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Construct a point from {xyz} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"xcoordinate_x": ConstructPointInput_xcoordinate_x,
		"ycoordinate_y": ConstructPointInput_ycoordinate_y,
		"zcoordinate_z": ConstructPointInput_zcoordinate_z,
	}

	public output:
	{
		"point_pt": ConstructPointOutput_point_pt,
	}

	constructor() {
		super();
		this.input = {
			"xcoordinate_x": new ConstructPointInput_xcoordinate_x(),
			"ycoordinate_y": new ConstructPointInput_ycoordinate_y(),
			"zcoordinate_z": new ConstructPointInput_zcoordinate_z(),
		}
		this.output = {
			"point_pt": new ConstructPointOutput_point_pt(),
		}
	}

}

class ConstructPointInput_xcoordinate_x extends ResthopperParameter {

	public name: string = "Xcoordinate";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPointInput_ycoordinate_y extends ResthopperParameter {

	public name: string = "Ycoordinate";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPointInput_zcoordinate_z extends ResthopperParameter {

	public name: string = "Zcoordinate";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPointOutput_point_pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
