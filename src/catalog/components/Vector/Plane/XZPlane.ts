import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class XZPlane extends ResthopperComponent {

	public guid: string = "8cc3a196-f6a0-49ea-9ed9-0cb343a3ae64";
	public name: string = "XZPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World XZ plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Origin_O": XZPlaneInput_Origin_O,
	}

	public output:
	{
		"Plane_P": XZPlaneOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Origin_O": new XZPlaneInput_Origin_O(),
		}
		this.output = {
			"Plane_P": new XZPlaneOutput_Plane_P(),
		}
	}

}

class XZPlaneInput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class XZPlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
