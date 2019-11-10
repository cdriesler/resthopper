import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AdjustPlane extends ResthopperComponent {

	public guid: string = "9ce34996-d8c6-40d3-b442-1a7c8c093614";
	public name: string = "AdjustPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Adjust a plane to match a new normal direction";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": AdjustPlaneInput_plane_p,
		"normal_n": AdjustPlaneInput_normal_n,
	}

	public output:
	{
		"plane_p": AdjustPlaneOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new AdjustPlaneInput_plane_p(),
			"normal_n": new AdjustPlaneInput_normal_n(),
		}
		this.output = {
			"plane_p": new AdjustPlaneOutput_plane_p(),
		}
	}

}

class AdjustPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdjustPlaneInput_normal_n extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdjustPlaneOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
