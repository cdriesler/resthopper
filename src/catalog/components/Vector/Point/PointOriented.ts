import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointOriented extends ResthopperComponent {

	public guid: string = "aa333235-5922-424c-9002-1e0b866a854b";
	public name: string = "PointOriented";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from plane {u,v,w} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Baseplane_P": PointOrientedInput_Baseplane_P,
		"Ucomponent_U": PointOrientedInput_Ucomponent_U,
		"Vcomponent_V": PointOrientedInput_Vcomponent_V,
		"Wcomponent_W": PointOrientedInput_Wcomponent_W,
	}

	public output:
	{
		"Point_Pt": PointOrientedOutput_Point_Pt,
	}

	constructor() {
		super();
		this.input = {
			"Baseplane_P": new PointOrientedInput_Baseplane_P(),
			"Ucomponent_U": new PointOrientedInput_Ucomponent_U(),
			"Vcomponent_V": new PointOrientedInput_Vcomponent_V(),
			"Wcomponent_W": new PointOrientedInput_Wcomponent_W(),
		}
		this.output = {
			"Point_Pt": new PointOrientedOutput_Point_Pt(),
		}
	}

}

class PointOrientedInput_Baseplane_P extends ResthopperParameter {

	public name: string = "Baseplane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedInput_Ucomponent_U extends ResthopperParameter {

	public name: string = "Ucomponent";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedInput_Vcomponent_V extends ResthopperParameter {

	public name: string = "Vcomponent";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedInput_Wcomponent_W extends ResthopperParameter {

	public name: string = "Wcomponent";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedOutput_Point_Pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
