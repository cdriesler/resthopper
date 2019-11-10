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
		"Xcoordinate_X": ConstructPointInput_Xcoordinate_X,
		"Ycoordinate_Y": ConstructPointInput_Ycoordinate_Y,
		"Zcoordinate_Z": ConstructPointInput_Zcoordinate_Z,
	}

	public output:
	{
		"Point_Pt": ConstructPointOutput_Point_Pt,
	}

	constructor() {
		super();
		this.input = {
			"Xcoordinate_X": new ConstructPointInput_Xcoordinate_X(),
			"Ycoordinate_Y": new ConstructPointInput_Ycoordinate_Y(),
			"Zcoordinate_Z": new ConstructPointInput_Zcoordinate_Z(),
		}
		this.output = {
			"Point_Pt": new ConstructPointOutput_Point_Pt(),
		}
	}

}

class ConstructPointInput_Xcoordinate_X extends ResthopperParameter {

	public name: string = "Xcoordinate";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPointInput_Ycoordinate_Y extends ResthopperParameter {

	public name: string = "Ycoordinate";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPointInput_Zcoordinate_Z extends ResthopperParameter {

	public name: string = "Zcoordinate";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPointOutput_Point_Pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
