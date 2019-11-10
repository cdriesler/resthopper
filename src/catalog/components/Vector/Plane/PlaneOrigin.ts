import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneOrigin extends ResthopperComponent {

	public guid: string = "75eec078-a905-47a1-b0d2-0934182b1e3d";
	public name: string = "PlaneOrigin";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Change the origin point of a plane";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Base_B": PlaneOriginInput_Base_B,
		"Origin_O": PlaneOriginInput_Origin_O,
	}

	public output:
	{
		"Plane_Pl": PlaneOriginOutput_Plane_Pl,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new PlaneOriginInput_Base_B(),
			"Origin_O": new PlaneOriginInput_Origin_O(),
		}
		this.output = {
			"Plane_Pl": new PlaneOriginOutput_Plane_Pl(),
		}
	}

}

class PlaneOriginInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOriginInput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOriginOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
