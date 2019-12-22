import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class XZPlane extends ResthopperComponent {

	public guid: string = "8cc3a196-f6a0-49ea-9ed9-0cb343a3ae64";
	public name: string = "XZ Plane";
	public nickName: string = "XZ";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World XZ plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"origin_o": XZPlaneInput_origin_o,
	}

	public output:
	{
		"plane_p": XZPlaneOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"origin_o": new XZPlaneInput_origin_o(),
		}
		this.output = {
			"plane_p": new XZPlaneOutput_plane_p(),
		}
	}

}

class XZPlaneInput_origin_o extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class XZPlaneOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
