import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneNormal extends ResthopperComponent {

	public guid: string = "cfb6b17f-ca82-4f5d-b604-d4f69f569de3";
	public name: string = "PlaneNormal";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane perpendicular to a vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Origin_O": PlaneNormalInput_Origin_O,
		"ZAxis_Z": PlaneNormalInput_ZAxis_Z,
	}

	public output:
	{
		"Plane_P": PlaneNormalOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Origin_O": new PlaneNormalInput_Origin_O(),
			"ZAxis_Z": new PlaneNormalInput_ZAxis_Z(),
		}
		this.output = {
			"Plane_P": new PlaneNormalOutput_Plane_P(),
		}
	}

}

class PlaneNormalInput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneNormalInput_ZAxis_Z extends ResthopperParameter {

	public name: string = "ZAxis";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneNormalOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
