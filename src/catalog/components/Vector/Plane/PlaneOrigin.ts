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
		"base_b": PlaneOriginInput_base_b,
		"origin_o": PlaneOriginInput_origin_o,
	}

	public output:
	{
		"plane_pl": PlaneOriginOutput_plane_pl,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new PlaneOriginInput_base_b(),
			"origin_o": new PlaneOriginInput_origin_o(),
		}
		this.output = {
			"plane_pl": new PlaneOriginOutput_plane_pl(),
		}
	}

}

class PlaneOriginInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOriginInput_origin_o extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOriginOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
