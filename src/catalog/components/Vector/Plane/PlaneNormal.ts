import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneNormal extends ResthopperComponent {

	public guid: string = "cfb6b17f-ca82-4f5d-b604-d4f69f569de3";
	public name: string = "Plane Normal";
	public nickName: string = "Pl";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane perpendicular to a vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"origin_o": PlaneNormalInput_origin_o,
		"zaxis_z": PlaneNormalInput_zaxis_z,
	}

	public output:
	{
		"plane_p": PlaneNormalOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"origin_o": new PlaneNormalInput_origin_o(),
			"zaxis_z": new PlaneNormalInput_zaxis_z(),
		}
		this.output = {
			"plane_p": new PlaneNormalOutput_plane_p(),
		}
	}

}

class PlaneNormalInput_origin_o extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public description: string = "Origin of plane"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneNormalInput_zaxis_z extends ResthopperParameter {

	public name: string = "ZAxis";
	public nickName: string = "Z";
	public description: string = "Z-Axis direction of plane"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneNormalOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Plane definition"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
